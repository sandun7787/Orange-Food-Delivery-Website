import React from 'react'
import './AppDownlord.css'
import { assets } from '../../assets/assets'

const AppDownlord = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experince Download <br/> Tomato App</p>
        <div className="App-download-platforms">
            <img src={assets.app_store} alt="" />
            <img src={assets.play_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownlord
