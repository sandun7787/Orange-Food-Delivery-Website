import React, { useContext, useState } from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/Context';

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');

  const {getTotalCartAmount} =useContext(StoreContext)

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setMenu('menu')}
          className={menu === 'menu' ? 'active' : ''}
        >
          <a href="#explore-menu">Menu</a>
        </li>
        <li
          onClick={() => setMenu('mobile app')}
          className={menu === 'mobile app' ? 'active' : ''}
        >
          <a href="#app-download">Mobile-App</a>
        </li>
        <li
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          {/* Corrected Link for the basket icon */}
          <Link to="./cart">
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)} type="button">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default NavBar;
