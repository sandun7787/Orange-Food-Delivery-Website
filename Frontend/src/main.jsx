import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './Context/Context.jsx';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
    <StoreContextProvider>
    <App />
    </StoreContextProvider>
     </BrowserRouter>
  </StrictMode>
);
