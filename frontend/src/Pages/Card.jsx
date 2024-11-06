import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, price, brand, image }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/Cart'); 
  };

  return (
    <div className="card">
      <img src={`http://localhost:5000/uploads/${image}`} alt="Product" />
      <p>{title}</p>
      <span></span>
      <h4>Rs-{price}</h4>
      <small className="brand">{brand}</small>
      <button className="card" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
