import React from 'react';
import { Link } from 'react-router-dom';
import './star.css';

const Star = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row ab'>
            <div className='col-md-4 abc'>
              <h2><b>FREE COFFEE</b></h2>
              <h2><b>IS A TAP AWAY</b></h2>
              <br/>
              <p className='app1'><span>Join now to start earning Rewards.</span></p>
              <button className='btn btncolor rounded-pill text-light mt-3'><b>Join now</b></button>
              <p className='app'><span>Or <Link to="" className='app1'>join in the app</Link> for the best experience</span></p>
            </div>
            <div className='col-md-8'>
                <img src='./images/starbucks2.png' alt='star'className='star'/>
            </div>
        </div>
    </div>
    </>
  )
}
export default Star;
