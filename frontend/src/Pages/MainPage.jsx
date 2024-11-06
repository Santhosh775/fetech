import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../Pages/MainPage.css';
import Propic from '../Assets/profile-pic.png';
import Card from './Card';

const MainPage = () => {
  const cardData = Array(20).fill({
    title: 'AC Outdoor Stand Wall Stand Split Ac',
    price: '3,000.00',
    brand: 'Blue Star Brand'
  });

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
        {cardData.map((data, index) => (
          <Card 
            key={index} 
            title={data.title} 
            price={data.price} 
            brand={data.brand} 
          />
        ))}
      </div>
    </>
  );
};

export default MainPage;
