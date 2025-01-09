import React from 'react';
import './sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option" activeClassName="active">
          <img src={assets.add_icon} alt="Add Icon" />
          <p>Add Item</p>
        </NavLink>

        <NavLink to="/list" className="sidebar-option" activeClassName="active">
          <img src={assets.order_icon} alt="List Icon" />
          <p>List Item</p>
        </NavLink>

        <NavLink to="/order" className="sidebar-option" activeClassName="active">
          <img src={assets.order_icon} alt="Order Icon" />
          <p>Order</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
