import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Card from './Pages/Card/Card';
import PlaceHolder from './Pages/PlaceOrder/PlaceHolder';

const App = () => {
  return (
    <div>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/order" element={<PlaceHolder />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
