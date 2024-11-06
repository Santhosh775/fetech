import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ onCheckout }) => {
  // Initial cart items with sample data
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: "AC Outdoor Stand", 
      category: "AC Spares", 
      quantity: 1, 
      price: 2999.00,
      image: "/api/placeholder/100/100" // Using placeholder for demo
    },
    { 
      id: 2, 
      name: "AC Filter", 
      category: "AC Spares", 
      quantity: 1, 
      price: 1499.00,
      image: "/api/placeholder/100/100" // Using placeholder for demo
    },
  ]);

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle quantity increase
  const handleIncrease = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId 
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  // Handle quantity decrease
  const handleDecrease = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };


  // Handle checkout
  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout(cartItems, totalAmount);
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart : {cartItems.length} items</h2>
      
      <div className="cart-content">
        <div className="cart-table">
          <table className="cart-table-content">
            <thead>
              <tr>
                <th className="table-header">Product Details</th>
                <th className="table-header">Quantity</th>
                <th className="table-header">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="table-cell">
                    <div className="product-details">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="product-image"
                      />
                      <div>
                        <p className="product-name">{item.name}</p>
                        <p className="product-category">{item.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="table-cell">
                    <div className="quantity-controls">
                      <button 
                        onClick={() => handleDecrease(item.id)}
                        className="quantity-button"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={() => handleIncrease(item.id)}
                        className="quantity-button"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="table-cell price-cell">
                    Rs {(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="order-summary">
          <h3 className="summary-title">Order Summary</h3>
          <div className="summary-content">
            <div className="summary-item">
              <span>Sub total</span>
              <span>{cartItems.length} items</span>
            </div>
            <div className="summary-item">
              <span>Total MRP</span>
              <span>Rs {totalAmount.toFixed(2)}</span>
            </div>
            <div className="summary-item total-amount">
              <span className="bold-text">Total Amount</span>
              <span className="bold-text">Rs {totalAmount.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="checkout-button"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
