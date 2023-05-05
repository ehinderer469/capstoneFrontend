import React, { useState } from "react";
import "./Checkout.css"
function Checkout({ cartItems, onPlaceOrder }) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [cardNumber, setCardNumber] = useState("");

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const sale = {
            username: name,
            address,
            cardNumber,
            totalPrice,
            items: cartItems,
        };

        onPlaceOrder(sale);
        alert("Order placed successfully!");
        setName("");
        setAddress("");
        setCardNumber("");
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div className="checkout-input-container">
                    <label htmlFor="checkout-name">Name:</label>
                    <input
                        type="text"
                        id="checkout-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="checkout-input-container">
                    <label htmlFor="checkout-address">Address:</label>
                    <input
                        type="text"
                        id="checkout-address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="checkout-input-container">
                    <label htmlFor="checkout-cardNumber">Card Number:</label>
                    <input
                        type="text"
                        id="checkout-cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <p>Total: ${totalPrice.toFixed(2)}</p>
                </div>
                <button type="submit" className="checkout-button">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;
