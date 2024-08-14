import React from "react";
import MenuHeader from "./Menu Component/MenuHeader";
import Footer from "./Reward Components/Footer";
import Drinkspanel1 from "./Drinkscomponent/Drinkspanel1";
import Drinkspanel2 from "./Drinkscomponent/Drinkspanel2";
import Drinkspanel3 from "./Drinkscomponent/Drinkspanel3";
import { GiCursedStar } from "react-icons/gi";

const Tumblers = () => {
  
    let head2 = ["Brown Stainless-Steel","Tumbler - 20 fl oz"];

  return (
    <>
      <MenuHeader/> 
    <hr/>
    <h6>Menu / Tumblers / Brown Stainless-Steel Tumbler - 20 fl oz</h6>
    <Drinkspanel1 img={"./Images/tumbler2.jpg"}  heads={head2}/>

    <div className='col-md-3 oleato-pnl4 '>

        <button className='oleato-btn5'><h5><GiCursedStar className='mx-1'/><b>Customize</b></h5></button>

    </div>   
    <Drinkspanel2 />
    <Drinkspanel3/>
    <Footer/>
    </>
  )
}

export default Tumblers;