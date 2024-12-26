import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = (setShowLogin) => {
    const [currState,setCurrState]=useState("login")
  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="login"?<></>:<input type="text" placeholder='your name' required/>}
            {currState==="login"?<></>:<input type="number" placeholder='phone number' required/>}
            {currState==="login"?<></>:<input type="text" placeholder='address' required/>}
            {currState==="login"?<></>:<input type="text" placeholder='Date of birth' required/>}


            
            <input typr="email" placeholder='your email' required/>
            <input typr="password" placeholder='password' required/>

        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type='checkbox' required/>
            <p>By Continunig, i agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"
        ? <p>Create new account?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        : <p>Already have an account<span onClick={()=>setCurrState("Login")}>Login Here</span></p>

        }
      </form>
    </div>
  )
}

export default LoginPopup
