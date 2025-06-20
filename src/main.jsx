import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Dashboard from './Dashboard.jsx';
import Favorites from './favorites.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path = "/dashboard" element={<Dashboard/>}/>
        <Route path = "/favorites" element={<Favorites/>}/>
      </Routes>
    </BrowserRouter>
);
