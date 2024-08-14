import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { useState } from 'react';

const Drinkspanel3 = () => {

    const[add,setadd]=useState(0);
    const Navigate=useNavigate();

    const handler1 = () =>{
        setadd(u=>{
          return add+1;
        })
      }
      const handler2 = () =>{
        setadd(u=>{
          if (add<=0) return 0
          return add-1;
        })
      }

  return (
    <>
      <div className='col-md-3 oleato-pnl3'>
        <button onClick={handler1} className='oleato-btn-1 px-4 py-2'><h5><b>Add to Order</b></h5></button>
        <button onClick={handler2} className='oleato-btn-1 px-4 py-2'><h5><b>Remove Items</b></h5></button>
      </div>

      <div className='container-fluid oleato-pnl2'>
        <div className='row'>
          <div className='col-md-2 oleato-b2' onClick={u=>Navigate("/Map")}>
            <span>For Item Availability</span><FaAngleDown className='oleato-icon1 '/>
            <h6><b>Choose Item Store</b></h6>
            <hr/>
          </div>
          <div className='col-md-2'>
            <button className='oleato-btn-2'><h4><b>{add}</b></h4></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Drinkspanel3;
