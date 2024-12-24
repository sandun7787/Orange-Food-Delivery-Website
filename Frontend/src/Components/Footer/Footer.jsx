import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
          <div className="footer-content-left">
                 <img src={assets.logo} alt="" />
                 <p>At Pizza Delight, we craft the most delicious and fresh pizzas to satisfy your cravings. Choose from a wide variety of toppings, including pepperoni, mushrooms, bell peppers, and gooey cheese. Whether you're a fan of classic Margherita or bold BBQ Chicken, we've got something for everyone.</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
          </div>
          <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
         <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+32-3445-6565-757</li>
            <li>contact@tomato.com</li>
           </ul>
         </div>
         
    
            </div> 
            <hr />
            <p className="footer-copyright">
                Copyright 2025@ Tomato.com - All Right Reserved.
            </p>
         
    </div>
  )
}

export default Footer
