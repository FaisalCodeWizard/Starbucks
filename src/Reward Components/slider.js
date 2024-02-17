import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdStar } from "react-icons/io";
import './slider.css';

const Slider = (props) => {

  let images = props.image;
  let headings = props.heading;
  let paragraphs = props.paragraph;

  const[imgIndex,setImgIndex] = useState(0);

  let handler1=()=>{
      setImgIndex(u=>{
          return 0
      })
  }
  let handler2=()=>{
      setImgIndex(u=>{
          return 1
      })
  }
  let handler3=()=>{
      setImgIndex(u=>{
          return 2
      })
  }
  let handler4=()=>{
      setImgIndex(u=>{
          return 3
      })
  }
  let handler5=()=>{
      setImgIndex(u=>{
          return 4
      })
  }

  return (
    <>
    <div className='container-fluid text-center c4 pt-5'>
        <h3>Get your favourites for free</h3>
        <div className='row pt-5'>
            <ul className='nav snav'>
                <li><Link to="" className='nav-link text-dark' onClick={handler1}>25<IoMdStar size={20} color='goldenrod'/></Link></li>
                <li><Link to="" className='nav-link text-dark' onClick={handler2}>100<IoMdStar size={20} color='goldenrod'/></Link></li>
                <li><Link to="" className='nav-link text-dark' onClick={handler3}>200<IoMdStar size={20} color='goldenrod'/></Link></li>
                <li><Link to="" className='nav-link text-dark' onClick={handler4}>300<IoMdStar size={20} color='goldenrod'/></Link></li>
                <li><Link to="" className='nav-link text-dark' onClick={handler5}>400<IoMdStar size={20} color='goldenrod'/></Link></li>
            </ul>
        </div>
    </div>

    <div className='container-fluid c42'>
        <div className='row bc42'>
            
            <div className='col-md-3 lc42'>
                <img src={images[imgIndex]} alt='Drinks'/>
            </div>

            <div className='col-md-4 rc42'>
                <h4>{headings[imgIndex]}</h4>
                <p className='mt-4'>{paragraphs[imgIndex]}</p>
            </div>

        </div>
      </div>
  
    </>
  )
}
export default Slider;
