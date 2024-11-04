import React from "react";
import Header from './Reward Components/Header';
import { useState } from 'react';
import Footer from "./Reward Components/Footer";
import Drinkspanel1 from "./Drinkscomponent/Drinkspanel1";
import Drinkspanel2 from "./Drinkscomponent/Drinkspanel2";
import Drinkspanel3 from "./Drinkscomponent/Drinkspanel3";
import { GiCursedStar } from "react-icons/gi";

const Colddrinks = () => {
  
    const[increment,setincrement]=useState(0);

    const increment1=()=>{
      setincrement(u=>{
        return increment+1;
      })
    }
    const increment2=()=>{
      setincrement(u=>{
        if (increment<=0) return 0
        return increment-1;
      })
    }
    let head2 = ["Frozen Pineapple Passionfruit Lemonade","Starbucks Refreshers® Beverage"];

  return (
    <>
      <Header/> 
    <hr/>
    <h6>Menu / Cold Drinks / Frozen Pineapple Passionfruit Lemonade Starbucks Refreshers® Beverage</h6>
    <Drinkspanel1 img={"./Images/colddrink.jpg"} head4="160 calories" heads={head2}/>

    <div className='col-md-3 oleato-pnl4 '>
        <h3>What's included</h3>
        <hr/>

        <h6>Add-ins</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Extra Strawberry Puree" >Extra Strawberry Puree</option>
          <option value="Light Strawberry Puree">Light Strawberry Puree</option>
          <option value="No Strawberry Puree">No Strawberry Puree</option>
          <option value="Strawberry Puree">Strawberry Puree</option>
        </select><br/>

        <h6>Lemonade</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Extra Lemonade" >Extra Lemonade</option>
          <option value="Light Lemonade">Light Lemonade</option>
          <option value="No Lemonade">No Lemonade</option>
          <option value="Lemonade">Lemonade</option>
        </select><br/>

        <h6>Add-ins</h6>
        <div className='oleato-opt1 mb-3 border border-3'>D-scoop
        <button className='oleato-btn4 px-2 oleato-btn44' onClick={increment2}>-</button>
        <span><b>{increment}</b></span>
        <button className='oleato-btn4 px-2 oleato-btn45' onClick={increment1}>+</button>
        </div>

        <button className='oleato-btn5'><h5><GiCursedStar className='mx-1'/><b>Customize</b></h5></button>

    </div>   
    <Drinkspanel2 />
    <Drinkspanel3/>
    <Footer/>
    </>
  )
}

export default Colddrinks;