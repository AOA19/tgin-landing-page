import React, { useState } from "react";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

function ShoppingContainer() {
  const [cartItems, setCartItems] = useState([]);



  // Function to add item to cart or update quantity if item already exists
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // If item already exists, update its quantity
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: item.quantity }
          : cartItem
      );
      setCartItems(updatedItems);
    } else {
      // If item doesn't exist, add it to the cart
      setCartItems([...cartItems, item]);
    }
  };

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
    setCartItems(updatedItems);
  };

  return (
    <div>
      <Products cartItems={cartItems} addToCart={addToCart} />
      <ShoppingCart
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={addToCart}
      />
    </div>
  );
}

export default ShoppingContainer;
