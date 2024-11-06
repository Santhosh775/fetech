import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '../Components/NavBar.css'
import  logo from '../Assets/RiM-Logo.png'
import userLogo from '../Assets/user-logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
        <nav>
           <div className='nav-1'>
              <p className='nav-para'> <i class="bi bi-geo-alt-fill" style={{color: 'red'}}></i> Location</p>
              <img className='logo' src={logo} alt="" />
              <img className='userLogo' src={userLogo} alt="" />
           </div>
           <div className='navigate'>
             <ul>
                <Link to="/">MainPage</Link>
                <Link to="/store-details">StoreDetails</Link>
                <Link to="/Feed-views">FeedView</Link>
                <Link to="/Login-Page">Login</Link>
                <Link to="/Technician-Page">TechnicianPage</Link>
                <Link to="/RegisterOtp">OTP</Link>
                <Link to="/Profile-info">Profile Info</Link>
                <Link to="/Order-history">Order History</Link>
                <Link to="/Cart">Cart</Link>
                <Link to="/Payment-success">Payment</Link>
                <Link to="/Submit-page">Submit page</Link>
                <Link to="/Submit-requirement">Submit requirement</Link>
                <Link to="/Submit-requirements">Submit requirements</Link>
             </ul>
           </div>
          
        </nav>
    </>
  )
}

export default NavBar