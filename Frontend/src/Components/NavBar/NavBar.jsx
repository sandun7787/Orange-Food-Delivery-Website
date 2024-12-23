import React, { useState } from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("mobile app")} className={menu === "mobile app" ? "active" : ""}>Mobile-App</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact-us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default NavBar;
