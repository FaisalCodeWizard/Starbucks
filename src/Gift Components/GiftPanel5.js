import React from 'react';
import './Gift.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const GiftPanel5 = (props) => {
    let names = props.name;
    const [img22,img23,img24,img25,img26] = props.image

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <div>
        <div className='container-fluid'>
        <div className='col-md-11 slider-b1'>
        <h6 className='slider-head1'><b>{names}</b></h6>
        <Carousel responsive={responsive}>
            <div >
                <img src={img22} className='slider-img1'/>
            </div>
            <div>
                <img src={img23} className='slider-img1'/>
            </div>
            <div>
                <img src={img24} className='slider-img1'/>
            </div>
            <div>
                <img src={img25} className='slider-img1'/>
            </div>
            <div>
                <img src={img26} className='slider-img1'/>
            </div>
            
        </Carousel>
        </div>
        </div>
      </div>
    </>
  )
}
export default GiftPanel5;
