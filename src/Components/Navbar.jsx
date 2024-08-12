
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import menu from './assets/menu.png'

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);

  const handleMenuClick = () => {
    setShowServices(!showServices);
  };

  return (
        <>
        <div className='nav-container'>
    <nav className='navbar'>
      <div className='menu-bar' onClick={handleMenuClick} >
        <img src={menu}alt='img not found'></img>
      </div>
      <div className='logo'>
      <Link to="/" className='link'><h1><lable>BRAND</lable>MASTERS</h1></Link>
        </div>

        <div className={`services ${showServices ? 'show' : ''}`}>
          <Link to="/tools" className='link'>Tools</Link>
          <Link to="/pricing" className='link'>Pricing</Link>
          <Link to="/support" className='link'>Support</Link>
        </div>

        <div className='login'>
        <Link to="/login" className='link'><button>Login</button></Link> 
      </div>

    </nav>
    </div>
    </>
  );
};

export default Navbar;
