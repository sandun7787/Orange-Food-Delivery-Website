import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets'; // Ensure assets includes Facebook and Google icons

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('login');

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState === 'login' ? 'Login' : 'Sign Up'}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="close-icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Sign Up' && (
            <>
              <input type="text" placeholder="Your Name" required />
              <input type="number" placeholder="Phone Number" required />
              <input type="text" placeholder="Address" required />
              <input type="date" placeholder="Date of Birth" required />
            </>
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        
        <button type="submit">
          {currState === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the{' '}
            <a href="#terms" target="_blank" rel="noopener noreferrer">
              terms of use
            </a>{' '}
            &{' '}
            <a href="#privacy" target="_blank" rel="noopener noreferrer">
              privacy policy
            </a>
          </p>
        </div>
        {currState === 'login' ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrState('Sign Up')}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrState('login')}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
