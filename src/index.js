import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { Rewards } from './Rewards';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { Gift } from './Gift';
import RegisterPage from './Admin/Register';
import LoginPage from './Admin/Login';
import { Map } from './Map';
import Oleato from './Oleato';
import Hotcoffee from './Hotcoffee';
import Hotdrinks from './Hotdrinks';
import Frappuccino from './Frappuccino';
import Coldcoffee from './Coldcoffee';
import Iceteas from './Iceteas';
import Colddrinks from './Colddrinks';
import Breakfast from './Breakfast';
import Yogurt from './Yogurt';
import Bakery from './Bakery';
import Lunch from './Lunch';
import Snacks from './Snack';
import Bean from './Bean';
import Ground from './Ground';
import Cups from './Cups';
import Tumblers from './Tumblers';
import Mugs from './Mugs';
import Others from './Others';
import Instant from './Instant';
import Hotteas from './Hotteas';
import { Product1 } from './context/Product1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Product1>
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Rewards/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Gift' element={<Gift/>}/>
        <Route path='/Register' element={<RegisterPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/Map' element={<Map/>}></Route>
        <Route path='/oleato' element={<Oleato/>}></Route>
        <Route path='/hotteas' element={<Hotteas/>}/>
        <Route path='/hotcoffee' element={<Hotcoffee/>}/>
        <Route path='/hotdrinks' element={<Hotdrinks/>}/>
        <Route path='/coldcoffee' element={<Coldcoffee/>}/>
        <Route path='/frappuccino' element={<Frappuccino/>}/>
        <Route path='/iceteas' element={<Iceteas/>}/>
        <Route path='/yogurt' element={<Yogurt/>}/>
        <Route path='/bakery' element={<Bakery/>}/>
        <Route path='/lunch' element={<Lunch/>}/>
        <Route path='/snacks' element={<Snacks/>}/>
        <Route path='/bean' element={<Bean/>}/>
        <Route path='/ground' element={<Ground/>}/>
        <Route path='/instant' element={<Instant/>}/>
        <Route path='/cups' element={<Cups/>}/>
        <Route path='/tumblers' element={<Tumblers/>}/>
        <Route path='/mugs' element={<Mugs/>}/>
        <Route path='/others' element={<Others/>}/>
        <Route path='/colddrinks' element={<Colddrinks/>}/>
        <Route path='/breakfast' element={<Breakfast/>}/>
    </Routes>
</BrowserRouter>
</Product1>
);

