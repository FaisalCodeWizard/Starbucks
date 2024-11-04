import React from "react";
import Header from './Reward Components/Header';
import { useState } from 'react';
import Footer from "./Reward Components/Footer";
import Drinkspanel1 from "./Drinkscomponent/Drinkspanel1";
import Drinkspanel2 from "./Drinkscomponent/Drinkspanel2";
import Drinkspanel3 from "./Drinkscomponent/Drinkspanel3";
import { GiCursedStar } from "react-icons/gi";


const Coldcoffee = () => {
  
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
    let head2 = ["Chocolate Hazelnut","Cold Brew"];

  return (
    <>
      <Header/> 
    <hr/>
    <h6>Menu / Hot Drinks / Oleato Golden Foam™ Cold Brew</h6>
    <Drinkspanel1 img={"./Images/coldcoffee.jpg"} head4="280 calories" heads={head2}/>

    <div className='col-md-3 oleato-pnl4 '>
        <h3>What's included</h3>
        <hr/>

        <h6>Toppings</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Extra Chocolate Cold Cream Foam" >Extra Chocolate Cold Cream Foam</option>
          <option value="Light Chocolate Cold Cream Foam">Light Chocolate Cold Cream Foam</option>
          <option value="No Chocolate Cold Cream Foam">No Chocolate Cold Cream Foam</option>
          <option value="Chocolate Cold Cream Foam">Chocolate Cold Cream Foam</option>
        </select><br/>        

        <h6>Toppings</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Extra Cookie Crumble Topping" >Extra Cookie Crumble Topping</option>
          <option value="LightCookie Crumble Topping">Light Cookie Crumble Topping</option>
          <option value="Cookie Crumble Topping">No Cookie Crumble Topping</option>
          <option value="Cookie Crumble Topping">Cookie Crumble Topping</option>
        </select><br/>

        <h6>Add-ins</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Extra Ice" >Extra Ice</option>
          <option value="Light Ice">Light Ice</option>
          <option value="No Ice">No Ice</option>
          <option value="Ice">Ice</option>
        </select><br/>

        <h6>Flavous</h6>
        <div className='oleato-opt1 mb-3 border border-3'>Syrup
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

export default Coldcoffee;