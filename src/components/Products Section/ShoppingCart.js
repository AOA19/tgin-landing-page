import { useState, useEffect } from "react";
import "./ShoppingCart.scss";
import { Modal, Button } from "react-bootstrap";
import { FaShoppingBag, FaTrash } from "react-icons/fa";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi2";

function ShoppingCart({ cartItems, onRemoveItem, onUpdateQuantity, clearCart }) {
  // State variable for cart modal
  const [showCart, setShowCart] = useState(false);
  const handleCartClose = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);


  // Check if cartItems is undefined or null
  if (!cartItems) {
    cartItems = []; // Set cartItems to an empty array if it's undefined or null
  }

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total price using useEffect to update it whenever cartItems change
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);



  return (
    <>
      {/* Shopping cart modal */}
      <button
        className="nav__cart"
        aria-label="Open shopping cart"
        onClick={handleShowCart}
      >
        <FaShoppingBag className="nav__icon" />
        <span>{totalItems}</span>
      </button>
      <Modal show={showCart} onHide={handleCartClose}>
        <Modal.Header closeButton>
          <Modal.Title className="cart__title">Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="list-group">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="cart__item-image w-50"
                  />
                  <div className="cart__item-details ps-3">
                    <p className="cart__item-name ">{item.name}</p>
                    <p className="cart__item-price mb-0">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="cart__item-quantity d-flex align-items-center">
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      <HiMinusCircle className="quantity-icon minus" />
                    </button>
                    <span className="quantity-num">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <HiPlusCircle className="quantity-icon plus" />
                    </button>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="removeItemBtn"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex flex-column">
          {cartItems.length > 0 && (
            <p className="text-right total-price">
              Total: ${totalPrice.toFixed(2)}
            </p>
          )}
          <Button variant="dark" size="lg" onClick={handleCartClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShoppingCart;
