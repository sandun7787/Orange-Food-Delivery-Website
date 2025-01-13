import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Add from './pages/Add/Add.jsx';
import List from './pages/List/List.jsx';
import Order from './pages/Order/Order.jsx';

const App = () => {

  const url ="http://localhost:4000"
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/add" element={<Add  url={url}/>} />
            <Route path="/list" element={<List  url={url}/>} />
            <Route path="/order" element={<Order url={url}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
