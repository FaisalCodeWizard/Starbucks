import React from 'react';
import { Link } from 'react-router-dom';
import { BsSpotify, BsFacebook, BsPinterest, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import './Footer.css';

function Footer() {
  return (
  <>
    <div className='container-fluid c5 pt-5'>
        <div className='row'>
            <div className='col-md-2'>
                <h5>&nbsp;&nbsp;&nbsp;About Us</h5>
                <ul className='nav pt-4'>
                    <li><Link to="" className="nav-link text-muted">Our Company</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Our Coffee</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Stories and News</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Starbucks Archive</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Investors Relations</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Customer Services</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Contact Us</Link></li>
                </ul>
            </div>

            <div className='col-md-2'>
                <h5>&nbsp;&nbsp;&nbsp;Careers</h5>
                <ul className='nav pt-4'>
                    <li><Link to="" className="nav-link text-muted">Culture and Values</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Inclusion,Diversity, and Equity</Link></li><br/>
                    <li><Link to="" className="nav-link text-muted">College Achievement Plan</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Alumni Community</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">U.S. Carees</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">International Careers</Link></li>
                </ul>
            </div>

            <div className='col-md-2'>
                <h5>&nbsp;&nbsp;&nbsp;Social Impact</h5>
                <ul className='nav pt-4'>
                    <li><Link to="" className="nav-link text-muted">People</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Planet</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Environmental and Social Impact Reporting</Link></li>
                </ul>
            </div>

            <div className='col-md-2'>
                <h5>&nbsp;&nbsp;&nbsp;For&nbsp;Business&nbsp;Partners</h5>
                <ul className='nav pt-4'>
                    <li><Link to="" className="nav-link text-muted">Landlord Support Centar</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Suppliers</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Corporate Gift Card Sales</Link></li><br/>
                    <li><Link to="" className="nav-link text-muted">Office and Foodservice Coffee</Link></li>
                </ul>
            </div>
      
            <div className='col-md-2'>
                <h5>&nbsp;&nbsp;&nbsp;Orders and PickUp</h5>
                <ul className='nav pt-4'>
                    <li><Link to="" className="nav-link text-muted">Order on the App</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Order on the Web</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Delivery</Link></li><br/><br/>
                    <li><Link to="" className="nav-link text-muted">Order and PickUp Options</Link></li><br/>
                    <li><Link to="" className="nav-link text-muted">Explore and Find Coffee for Home</Link></li>
                </ul>
            </div>
        </div>
        <p className='ln'><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__________________________________________________________________________________________________________________________________________________________________________________</span></p>

        <ul className='nav py-2'>
            <li><Link to="https://open.spotify.com/user/starbucks" target='_blank' className='nav-link'><BsSpotify size={30} color='black'/></Link></li>
            <li><Link to="https://www.facebook.com/starbucksindia" target='_blank' className='nav-link'><BsFacebook size={30} color='black'/></Link></li>
            <li><Link to="https://www.pinterest.com/starbucks" target='_blank' className='nav-link'><BsPinterest size={30} color='black'/></Link></li>
            <li><Link to="https://www.instagram.com/starbucksindia" target='_blank' className='nav-link'><BsInstagram size={30} color='black'/></Link></li>
            <li><Link to="https://www.youtube.com/@starbucks" target='_blank' className='nav-link'><BsYoutube size={30} color='black'/></Link></li>
            <li><Link to="https://twitter.com/StarbucksIndia" target='_blank' className='nav-link'><BsTwitter size={30} color='black'/></Link></li>
        </ul>

        <div>
            <ul className='nav py-2 py-3 foot'>
                <li><Link to="" className='nav-link text-dark'>Privacy Notice &nbsp;&nbsp; &#124;</Link></li>
                <li><Link to="" className='nav-link text-dark'>Terms of Use &nbsp;&nbsp; &#124;</Link></li>
                <li><Link to="" className='nav-link text-dark'>Do Not Share My Personal Information &nbsp;&nbsp; &#124;</Link></li>
                <li><Link to="" className='nav-link text-dark'>CA Supply Chain Act &nbsp;&nbsp; &#124;</Link></li>
                <li><Link to="" className='nav-link text-dark'>Accessibility &nbsp;&nbsp; &#124;</Link></li>
                <li><Link to="" className='nav-link text-dark'>Cookie Preferences </Link></li>

                <span className='py-3 px-3'>© 2024 Starbucks Coffee Company. All rights reserved.</span>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer;