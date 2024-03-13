import React from 'react';
import './Gift.css';

const GiftPanel4 = (props) => {
    const [img18,img19,img20,img21]=props.image;
  return (
    <>
    <div className='container-fluid'>
        <div className='col-md-11 slider-b1'>
            <h6 className='slider-head1'><b>{props.name}</b></h6>
            <div className='row'>
                <div className='col-md-3'>
                    <img src={img18} className='slider-img1 gft-pnl-4'/>
                </div>
                <div className='col-md-3'>
                    <img src={img19} className='slider-img1 gft-pnl-4'/>
                </div>
                <div className='col-md-3'>
                    <img src={img20} className='slider-img1 gft-pnl-4'/>
                </div>
                <div className='col-md-3'>
                    <img src={img21} className='slider-img1 gft-pnl-4'/>
                </div>
            </div>  
        </div>
      </div>
    </>
  )
}
export default GiftPanel4;
