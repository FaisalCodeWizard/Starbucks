import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { Rewards } from './Rewards';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { Gift } from './Gift';
import RegisterPage from './Admin/Register';
import LoginPage from './Admin/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Rewards/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Gift' element={<Gift/>}/>
        <Route path='/Register' element={<RegisterPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
    </Routes>
</BrowserRouter>
);

