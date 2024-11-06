import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/Cart.css';
import outdoorStand from '../Assets/ac-outdoor-stand.png';

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = [
    { id: 1, name: "Tool name", category: "AC Spares", quantity: 1, price: 2999.00 },
    { id: 2, name: "Tool name", category: "AC Spares", quantity: 1, price: 2999.00 },
  ];

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/Payment-success');
  };

  return (
    <div className="cart-container">
      <h2>Your Cart : {cartItems.length} items</h2>
      <div className="cart-content">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product Details</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="product-details">
                  <img src={outdoorStand} alt={item.name} className="product-images" />
                  <div className="product-info">
                    <p className="product-name">{item.name}</p>
                    <p className="product-category">{item.category}</p>
                  </div>
                </td>
                <td className="quantity-control">
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </td>
                <td className="total-price">Rs {item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-total">
          <p>Total Cart Value <span>Rs {totalAmount}</span></p>
        </div>
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <p>Sub total <span>{cartItems.length} items</span></p>
          <p>Total MRP <span>Rs {totalAmount}</span></p>
          <p>Total Cart Value <span>Rs {totalAmount}</span></p>
          <h4>Total Amount <span className="total-amount">Rs {totalAmount}</span></h4>
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
