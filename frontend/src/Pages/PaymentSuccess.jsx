import React from 'react';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <div className="payment-success-message">
        <div className="icon">
          <i className="bi bi-check-circle-fill"></i>
        </div>
        <div className="title">Success!</div>
        <div className="description">Your order has successfully been submitted</div>
        <button className="continue-button" onClick={() => console.log('Continue Shopping')}>
          <i className="bi bi-arrow-left"></i> Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
