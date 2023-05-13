

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/cart.css"; // Import the CSS file for styling

function Cart({ cartItems, clearCart }) {
  const [totalPrice, setTotalPrice] = useState(
    cartItems.reduce((total, item) => total + item.price, 0)
  );

  const isCartEmpty = totalPrice === 0;

  useEffect(() => {
    setTotalPrice(cartItems.reduce((total, item) => total + item.price, 0));
  }, [cartItems]);

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Cart</h1>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            {item.productName} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
      {isCartEmpty && <p className="cart-message">You need to add items to the cart.</p>}
      <NavLink
        to={isCartEmpty ? "#" : "/checkout"}
        className={`cart-button ${isCartEmpty ? "disabled" : ""}`}
      >
        Proceed to Checkout
      </NavLink>
      <button onClick={clearCart} className="cart-button">
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
