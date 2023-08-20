import { useState } from "react";
import "./App.scss";
import "./components/Header Section/Navbar.scss";
import Navbar from "./components/Header Section/Navbar.js";
import HeroContent from "./components/Header Section/HeroContent.js";
import BestSellersCarousel from "./components/Best Sellers Section/BestSellersCarousel.js";
import Collections from "./components/Collections Section/Collections";
import Products from "./components/Products Section/Products";
import About from "./components/About Section/About";
import Ingredients from "./components/About Section/Ingredients";
import Testimonials from "./components/Testimonials Section/Testimonials";
import Footer from "./components/Footer Section/Footer";
import ShoppingCart from "./components/Products Section/ShoppingCart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    );
  };

  // Change nav-header color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className="App">
      <div className="app-header" id="home">
        <div className={color ? "nav-header nav-header--bg" : "nav-header"}>
          <Navbar />
          <ShoppingCart
            cartItems={cartItems}
            onRemoveItem={removeFromCart}
            onUpdateQuantity={handleUpdateQuantity}
          />
        </div>
        <HeroContent />
      </div>
      <div className="bestsellers-section">
        <h2 className="section-header">Best Sellers</h2>
        <BestSellersCarousel />
      </div>
      <div className="collections-section">
        <h2 className="section-header">Our Collections</h2>
        <Collections />
      </div>
      <div className="products-section">
        <h2 className="section-header">Shop Our Products</h2>
        <Products cartItems={cartItems} addToCart={addToCart} />
      </div>
      <div className="about-section">
        <h2 className="section-header">About TGIN</h2>
        <About />
        <Ingredients />
      </div>
      <div className="testimonials-section">
        <Testimonials />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
