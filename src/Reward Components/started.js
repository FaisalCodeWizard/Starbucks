import React from 'react';
import { Bs1Circle, Bs2Circle, Bs3Circle } from "react-icons/bs";
import './started.css';

const Started = () => {
  return (
    <>
    <div className='container-fluid c3'>
        <h3>Getting Started is easy</h3>
        <p className='mt-2'><span>Earn Stars and get rewarded in a few easy steps.</span></p>
        <div className='row my-5'>
            <div className='col-md-4 justify-content-between'>
                <Bs1Circle size={50} color='green'/><br/><br/>
                <h4>Create an account</h4>
                <p><span>To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.</span></p>
            </div>
            <div className='col-md-4 justify-content-between'>
                <Bs2Circle size={50} color='green'/> <br/><br/>
                <h4>Order and pay how you’d like</h4>
                <p><span>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how</span></p>
            </div>
            <div className='col-md-4 justify-content-between'>
                <Bs3Circle size={50} color='green'/><br/><br/>
                <h4>Earn Stars, get Rewards</h4>
                <p><span>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</span></p>
            </div>
        </div>
    </div>
    </>
  )
}
export default Started;
