import React, { useState } from 'react'
import './NavBar.css'
import {assets} from '../../assets/assets'

const NavBar = () => {
  const[menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li className={menu === "home"? "active":""}>Home</li>
        <li className={menu ==="Menu"?"active":""}>Menu</li>
        <li className={menu ==="Mobile App"? "active":""}>Mobile-App</li>
        <li className={menu ==="Contact-us"? "active":""}>Contatc-us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className='dot'></div>
        </div>
        <button>Sign in
        </button>
      </div>
    </div>
  )
}

export default NavBar
