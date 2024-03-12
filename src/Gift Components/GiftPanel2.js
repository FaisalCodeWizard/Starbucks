import React from 'react';
import './Gift.css';

const GiftPanel2 = () => {
  return (
    <>
    <div className='container gift-panel1'>
        <div className='row'>

            <div className='col-md-1 my-2'>
                <img src='./Images/gift2img.jpg' className='panel2-img1'/>
            </div>
            <div className='col-md-6 mt-2'><h6>New! Effortlessly send up to 10 eGifts per purchase. Select a design to start!</h6></div>
            
        </div>
      </div>
      <div className='container-fluid gift-panel2'>
        <h4 className='p1'>Received a gift card?</h4>
        <div className='row'>
            <div className='col-md-3'><p className='gift-p'>Earns 2★Stars per $1</p></div>
            <div className='col-md-4'>
            <button className='gift-btn1'><h6>Add or Reload</h6></button>
            <button className='gift-btn1'><h6>Check balance</h6></button>
            </div>
        </div>
        <h6 className='text-end px-4 gift-head2'><b>Card Terms & Conditions</b></h6>
      </div>
    </>
  )
}

export default GiftPanel2;
