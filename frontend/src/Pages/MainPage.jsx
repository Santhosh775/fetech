import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../Pages/MainPage.css';
import Propic from '../Assets/profile-pic.png';
import Card from './Card';
import axios from 'axios';

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  // Add product to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // If product already in cart, increase the quantity
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If product not in cart, add it
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <div className="Mob-nav">
        <div><i className="bi bi-list"></i></div>
        <div>Mobile Site Product</div>
        <div><img src={Propic} alt="Profile" /></div>
      </div>

      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" />
        <div className="search-icons">
          <i className="bi bi-x-lg"></i>
          <div className="divider"></div>
          <i className="bi bi-mic-fill"></i>
          <i className="bi bi-search"></i>
        </div>
      </div>

      <div className="nav-links">
        <button><i className="bi bi-box-seam"></i> Forum</button>
        <div className="nav-container">
          <ul>
            <li><input className="loc-search" type="text" placeholder="Enter your Location here" /></li>
            <li><a href=""><i className="bi bi-crosshair" style={{ width: '24px', height: '24px' }}></i> Near Me</a></li>
            <li><a href="">Coimbatore</a></li>
            <li><a href="">Chennai</a></li>
            <li><a href="">Kerala</a></li>
            <li><a href="">Goa</a></li>
            <li><a href="">Bangalore</a></li>
            <li><a href="">Pune</a></li>
          </ul>
        </div>
      </div>

      <div className="card-section">
        {products.map((product) => (
          <Card 
            key={product.id} 
            title={product.productName} 
            price={product.mrfRate} 
            brand={product.organizationName} 
            image={product.image} 
            handleAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </>
  );
};

export default MainPage;
