import React from 'react';
import './Gift.css';

const GiftPanel6 = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='col-md-11 slider-b1'>
            <h6 className='slider-head1'></h6>
            <div >
                <img src='./Images/gift3.jpg' className='slider-img1'/>
            </div>
        </div>
      </div>

      <div className='container-fluid gift-panel2 pt-5 gift-panel5-2'>
        <h6><b>GIFT CARD SUPPORT</b></h6>
        <h6 className='mt-4'>Use the links below to manage eGifts you have sent</h6>
        <h6 className='mb-4'>or received, or view our full Card Terms & Conditions.</h6>
        <div className='row mb-4'>
            <div className='col-md-6'>
            <button className='gift-btn1 gift-panel5-2'><h6>eGift Support</h6></button>
            <button className='gift-btn1 gift-panel5-2'><h6>See Terms & Conditions</h6></button>
            <button className='gift-btn1 gift-panel5-2'><h6>eGift FAQs</h6></button>
            </div>
        </div>
      </div>
    </>
  )
}
export default GiftPanel6;
