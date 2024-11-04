import React from 'react';
import Header from './Reward Components/Header';
// import { useProductsContext } from './context/Product1';
import Footer from './Reward Components/Footer';
import { Link } from 'react-router-dom';

export const Menu = () => {
  // const MYname = useProductsContext();

  return (
    <>
    <Header/>
    <div className='container-fluid py-3'>
          <div className='row'>
            <div className='col-md-2 py-3 mt-4 home-panel-1'>
                <h5>Drinks</h5>
                <p>Oleato™</p>
                <p>Hot Coffees</p>
                <p>Hot Teas</p>
                <p>Hot Drinks</p>
                <p>Frappuccino® Blended Beverages</p>
                <p>Cold Coffees</p>
                <p>Iced Teas</p>
                <p>Cold Drinks</p>

                <h5>Food</h5>
                <p>Hot Breakfast</p>
                <p>Oatmeal & Yogurt</p>
                <p>Bakery</p>
                <p>Lunch</p>
                <p>Snacks & Sweets</p>

                <h5>At Home Coffee</h5>
                <p>Whole Bean</p>
                <p>Ground</p>
                <p>VIA® Instant</p>

                <h5>Merchandise</h5>
                <p>Cold Cups</p>
                <p>Tumblers</p>
                <p>Mugs</p>
            </div>

            <div className='col-md-6 '>
              <h3><b>MENU</b></h3>
              <h4 className='mt-4'><b>Drinks</b></h4>
              <hr/>
 
              <div className='container-fluid py-2 menu-panel1'>
                  <div className='row justify-content-evenly'>
              <div className='col-md-3 menu-b1 '>
                <Link to="/oleato"> <img src="./Images/olato.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Oleato™</h5>
              </div>
              <div className='col-md-3 '>
              <Link to="/hotcoffee"> <img src="./Images/coffeeimg.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Hot Coffees</h5>
              </div>
              </div>
              </div>

              <div className='container-fluid py-2 menu-panel1'>
                  <div className='row justify-content-evenly'>
              <div className='col-md-3 menu-b1 '>
                <Link to="/hotteas"> <img src='./Images/tea.jpg' className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Hot Teas</h5>
              </div>
              <div className='col-md-3 '>
              <Link to="/hotdrinks"> <img src="./Images/drink1.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Hot Drinks</h5>
              </div>
              </div>
              </div>

              <div className='container-fluid py-2 menu-panel1'>
                  <div className='row justify-content-evenly'>
              <div className='col-md-3 menu-b1 '>
                <Link to="/frappuccino"> <img src="./Images/frapsimg.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Frappuccino</h5>
              </div>
              <div className='col-md-3 '>
              <Link to="/coldcoffee"> <img src="./Images/coldcoffee.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Cold Coffees</h5>
              </div>
              </div>
              </div>

              <div className='container-fluid py-2 menu-panel1'>
                  <div className='row justify-content-evenly'>
              <div className='col-md-3 menu-b1 '>
                <Link to="/iceteas"> <img src="./Images/ice.png" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Ice Teas</h5>
              </div>
              <div className='col-md-3 '>
              <Link to="/colddrinks"> <img src="./Images/colddrink.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Cold Drinks</h5>
              </div>
              </div>
              </div>

              
    

              <h4 className='mt-4'><b>FOOD</b></h4>
              <hr/>

              <div className='container-fluid py-2 menu-panel1'>
                  <div className='row justify-content-evenly'>
              <div className='col-md-3 menu-b1 '>
                <Link to="/breakfast"> <img src="./Images/breakfast.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Breakfast</h5>
              </div>
              <div className='col-md-3 '>
              <Link to="/yogurt"> <img src="./Images/yogurt1.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Yogurt</h5>
              </div>
              </div>
              </div>

              <div className='container-fluid py-2 menu-panel1'>
                  <div className='row justify-content-evenly'>
              <div className='col-md-3 menu-b1 '>
              <Link to="/bakery"> <img src="./Images/bakery.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Bakery</h5>
              </div>
              <div className='col-md-3 '>
              <Link to="/lunch"> <img src="./Images/lunch.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Lunch</h5>
              </div>
              </div>
              </div>

              <div className='container-fluid py-2 menu-panel1 mx-4'>
                  <div className='row '>
              <div className='col-md-3 menu-b1 '>
                <Link to="/snacks"> <img src="./Images/snacks.jpg" className='home-panel-img1 '/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Snacks</h5>
              </div>
              </div>
              </div>



              <h4 className='mt-4'><b>At Home Coffee</b></h4>
              <hr/>

              <div className='container-fluid py-2 menu-panel1'>
                  <div className='row justify-content-evenly'>
              <div className='col-md-3 menu-b1 '>
                <Link to="/bean"> <img src="./Images/bean.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Whole Bean</h5>
              </div>
              <div className='col-md-3 '>
              <Link to="/ground"> <img src="./Images/ground1.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Ground</h5>
              </div>
              </div>
              </div>

              <div className='container-fluid py-2 menu-panel1 mx-4'>
                  <div className='row '>
              <div className='col-md-3 menu-b1 '>
                <Link to="/instant"> <img src="./Images/via.jpg" className='home-panel-img1 '/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Via Instant</h5>
              </div>
              </div>
              </div>
              


              <h4 className='mt-4'><b>Merchandise</b></h4>
              <hr/>

              <div className='container-fluid py-2 menu-panel1'>
                  <div className='row justify-content-evenly'>
              <div className='col-md-3 menu-b1 '>
                <Link to="/cups"> <img src="./Images/cup.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Cups</h5>
              </div>
              <div className='col-md-3 '>
              <Link to="/tumblers"> <img src="./Images/tumbler2.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Tumblers</h5>
              </div>
              </div>
              </div>

              <div className='container-fluid py-2 menu-panel1'>
                  <div className='row justify-content-evenly'>
              <div className='col-md-3 menu-b1 '>
                <Link to="/mugs"> <img src="./Images/mug.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Mugs</h5>
              </div>
              <div className='col-md-3 '>
              <Link to="/others"> <img src="./Images/other.jpg" className='home-panel-img1'/></Link>
              </div>
              <div className='col-md-2'><h5 className='home-panel-b2'>Others</h5>
              </div>
              </div>
              </div>
            
            </div>
            

          </div>  
        </div>
      <Footer/>
    </>
  )
}