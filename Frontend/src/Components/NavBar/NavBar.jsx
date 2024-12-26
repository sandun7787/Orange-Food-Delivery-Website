import React, { useState } from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          <a href="#explore-menu">Menu</a>
        </li>
        <li
          onClick={() => setMenu("mobile app")}
          className={menu === "mobile app" ? "active" : ""}
        >
          <a href="#app-download">Mobile-App</a>
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div className="dot"></div>
        </div>
        <button type="button">Sign in</button>
      </div>
    </div>
  );
};

export default NavBar;
