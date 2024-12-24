import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploerMenu from '../../Components/ExploreMenu/ExploerMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'

const Home = () => {


  const [category,setCategory]= useState("All")
  return (
    <div>
      <Header/>
      <ExploerMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
