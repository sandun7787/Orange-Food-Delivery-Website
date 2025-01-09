import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Add from './pages/Add/Add.jsx';
import List from './pages/List/List.jsx';
import Order from './pages/Order/Order.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
