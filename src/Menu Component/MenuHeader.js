import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import './MenuHeader.css';

const MenuHeader = () => {
    const Navigate = useNavigate();
  return (
    <>
        <div className='container-fluid py-4 border'>
            <div className='row'>
                <div className='col-md-1'>
                    <img src='./images/logo.png' alt='logo' className='logo' onClick={e=>Navigate("/")}/>
                </div>
                <div className='col-md-4'>
                    <ul className='nav'>
                        <li><Link to="/Menu" className='nav-link text-dark mt-1 hov'><b>MENU</b></Link></li>
                        <li><Link to="/" className='nav-link text-dark mt-1 hov'><b>REWARDS</b></Link></li>
                        <li><Link to="/Gift" className='nav-link text-dark mt-1 hov'><b>GIFT CARDS</b></Link></li>
                    </ul>
                </div>
                <div className='col-md-7'>
                    <ul className='nav rnav'>
                        <li><Link to="/Map" className='nav-link text-dark mt-1'><b><FaLocationDot size={23}/>&nbsp;Find a store</b></Link></li>
                        <button className='btn btn-outline-dark rounded-pill mt-1' onClick={e=>Navigate("/Register")}><b>&nbsp; Sign in &nbsp;</b></button>
                        <button className='btn btn-dark rounded-pill mx-3 mt-1' onClick={e=>Navigate("/Login")}><b>Join now</b></button>
                    </ul>
                </div>
            </div>
        </div>
        <div className='container-fluid py-3 hbg'>
            <h6 className='col-md-6 text-light'><b className='line'>STARBUCKS® REWARDS</b></h6>
        </div>
    </>
  )
}
export default MenuHeader;