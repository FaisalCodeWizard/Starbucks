import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Footer from '../Reward Components/Footer';

function LoginPage() {
  return (
    <>
    <div className='container-fluid head'>
        <div className='row'>
            <div className='col-md-1 mt-4'>
            <img src='./images/logo.png' alt='logo' className='logo'/>
            </div>
            <div className='col-md-3 py-4 mt-1'><h2>Starbucks</h2></div>
        </div>
    </div>
    <div className='container mt-5 inset'>
        <div className='row justify-content-center'>
            <div className='col-md-5 border bdr'>
                <h3 align="center" className='my-4'>Create Account</h3>
                <div className='mb-3'>
                    <input type='text' placeholder='FullName' className='form-control'/>
                </div>
                <div className='mb-3'>
                    <input type='email' placeholder='Email' className='form-control'/>
                </div>
                <div className='mb-3'>
                    <input type='mobile' placeholder='Mobile' className='form-control'/>
                </div>
                <div className='mb-3'>
                    <input type='text' placeholder='UserName' className='form-control'/>
                </div>
                <div className='mb-3'>
                    <input type='password' placeholder='Password' className='form-control'/>
                </div>
                <div className='dc lg'>
                <button className='btn btn-dark rounded-pill mt-2 mb-3 decor'><b>Sign up</b></button>
                </div>
                <Link to="/Register" className='nav-link mb-3 lg1'><u>Already a user ?</u></Link>
            </div>
        </div>
    </div>
    <hr/>
    <Footer/>
    </>
  )
}

export default LoginPage;