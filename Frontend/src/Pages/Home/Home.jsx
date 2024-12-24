import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploerMenu from '../../Components/ExploreMenu/ExploerMenu'

const Home = () => {

  const [category,setCategory]= useState("All")
  return (
    <div>
      <Header/>
      <ExploerMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
