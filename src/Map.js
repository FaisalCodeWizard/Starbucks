import React from 'react';
import Header from './Reward Components/Header';
import './index.css';

export const Map = () => {
  return (
    <>
    <Header/>
    <div className='container-fluid my-3'>
            <div className='row'>
                
                <div className='col-md-4'>
                    <hr/>
                    <h2 className='mx-2 my-4'>We are unable to access your exact location</h2>
                    <p className='mx-2 my-4'>To find a Starbucks store, use the search feature, navigate using the map, or turn on location services.</p>
                    
                    <h6 className='store-p store-p11'>Privacy Notice</h6>
                    <h6 className='store-p'>Terms of Use</h6>
                    <h6 className='store-p'>Do Not Share My Personal Information</h6>
                </div>

                <div className='col-md-8'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56121.551946701904!2d76.97384484863284!3d28.461562499999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d634961f95%3A0x3cc8e2738a5240fc!2sStarbucks!5e0!3m2!1sen!2sin!4v1705492239728!5m2!1sen!2sin" width="100%" 
                height="550" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
    </>
  )
}
