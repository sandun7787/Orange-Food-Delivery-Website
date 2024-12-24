import React from 'react'
import './ExploerMenu.css'
import {menu_list} from '../../assets/assets'

const ExploerMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>The origins of pizza can be traced back to ancient civilizations. While the exact birthplace of pizza is debated, it’s often linked to the Mediterranean, particularly ancient Greece and Rome. The Greeks are believed to have eaten flatbreads topped with various ingredients like herbs, oil, and cheese. The Romans, too, are known to have eaten a similar type of flatbread with toppings.</p> 
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return(
              <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                   key={index} className="explore-menu-list-item">
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
              <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
      <hr />
    </div>
  )
}

export default ExploerMenu
