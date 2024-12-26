import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Card from "./Pages/Card/Card";
import PlaceHolder from "./Pages/PlaceOrder/PlaceHolder";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

const App = () => {

  const [showLogin,setShowLogin] =useState(false)
  return (
    <div>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/order" element={<PlaceHolder />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
