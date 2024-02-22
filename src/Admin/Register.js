import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import './Register.css';
import Footer from '../Reward Components/Footer';

function RegisterPage() {
    const[userregister,setUserregister]=useState();

    const inputHandler=(e)=>{
        setUserregister({...userregister,[e.target.name]: e.target.value})
    }

    let apiurl="http://localhost:4000/AdminRegister";

    const Registeruser=(e)=>{
        e.preventDefault();
        axios.get(`${apiurl}`)
        .then(res=>{
            let result = res.data;
            let status = false;
            result.forEach(user=>{
                if(user['username']===userregister.username && user['password']===userregister.password)
                {
                    status = true
                }
            });
            if(status){
                alert("Right User")
            }
            else{
                alert("Wrong User")
            }
        }).catch(err=>console.log(err))  
    }

    const Navigate = useNavigate();
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
        <form onSubmit={Registeruser} autoComplete='off'>
        <div className='row justify-content-center'>
            <div className='col-md-5 border bdr'>
                <h3 align="center" className='my-4'>User Login</h3>
                <div className='mb-3'>
                    <input type='text' placeholder='UserName' className='form-control' name="username" value={userregister?.username} onChange={inputHandler}/>
                </div>
                <div className='mb-3'>
                    <input type='password' placeholder='Password' className='form-control' name="password" value={userregister?.password} onChange={inputHandler}/>
                </div>
                <div className='dc'>
                <button className='btn btn-dark rounded-pill mt-2 mb-3 decor'><b>Sign in</b></button>
                <button className='btn btn-dark rounded-pill mt-2 mb-3 dcr' onClick={e=>Navigate("/Login")}><b>New User</b></button>
                </div>
            </div>
        </div>
        </form>
    </div>
    <hr/>
    <Footer/>
    </>
  )
}

export default RegisterPage;