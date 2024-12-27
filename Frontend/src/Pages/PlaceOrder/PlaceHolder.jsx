import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigate hook
import './PlaceHolder.css';

const PlaceHolder = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to get the total cart amount
  const getTotalCartAmount = () => {
    // You can replace this with your actual logic to calculate the cart total
    return 50; // For example purposes, returning a static value
  };

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$2</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() + 2}</p>
              <hr />
            </div>
          </div>
        </div>
        <button type="button">PROCEED TO PAYMENT</button>
      </div>
    </form>
  );
};

export default PlaceHolder;
