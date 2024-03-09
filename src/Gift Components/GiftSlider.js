import React from 'react';
import './Gift.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const GiftSlider = (props) => {
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
      const names = props.name;
      const [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17] = props.image;
  return (
    <>
      <div>
        <div className='container-fluid'>
        <div className='col-md-11 slider-b1'>
        <h6 className='slider-head1'><b>{names}</b></h6>
        <Carousel responsive={responsive}>
            <div >
                <img src={img1} className='slider-img1'/>
            </div>
            <div>
                <img src={img2} className='slider-img1'/>
            </div>
            <div>
                <img src={img3} className='slider-img1'/>
            </div>
            <div>
                <img src={img4} className='slider-img1'/>
            </div>
            <div>
                <img src={img5} className='slider-img1'/>
            </div>
            <div>
                <img src={img6} className='slider-img1'/>
            </div>
            <div>
                <img src={img7} className='slider-img1'/>
            </div>
            <div>
                <img src={img8} className='slider-img1'/>
            </div>
            <div>
                <img src={img9} className='slider-img1'/>
            </div>
            <div>
                <img src={img10} className='slider-img1'/>
            </div>
            <div>
                <img src={img11} className='slider-img1'/>
            </div>
            <div>
                <img src={img12} className='slider-img1'/>
            </div>
            <div>
                <img src={img13} className='slider-img1'/>
            </div>
            <div>
                <img src={img14} className='slider-img1'/>
            </div>
            <div>
                <img src={img15} className='slider-img1'/>
            </div>
            <div>
                <img src={img16} className='slider-img1'/>
            </div>
            <div>
                <img src={img17} className='slider-img1'/>
            </div>
            
        </Carousel>
        </div>
        </div>
      </div>
    </>
  )
}

export default GiftSlider;
