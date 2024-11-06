import React from 'react';
import { useNavigate } from 'react-router-dom';
import outdoorStand from '../Assets/ac-outdoor-stand.png';

const Card = ({ title, price, brand }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/Cart'); 
  };

  return (
    <div className="card">
      <img src={outdoorStand} alt="Outdoor Stand" />
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
