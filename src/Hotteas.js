import React from "react";
import MenuHeader from "./Menu Component/MenuHeader";
import { useState } from 'react';
import Footer from "./Reward Components/Footer";
import Drinkspanel1 from "./Drinkscomponent/Drinkspanel1";
import Drinkspanel2 from "./Drinkscomponent/Drinkspanel2";
import Drinkspanel3 from "./Drinkscomponent/Drinkspanel3";
import { GiCursedStar } from "react-icons/gi";

const Hotteas = () => {

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
  
    let head2 = ["Gingerbread Oatmilk","Chai"];
  
    return (
      <>
      <MenuHeader/>
        <h5>HOT TEAS</h5>
        <hr/>
      <h6>Menu / Cold Coffees / Oleato Golden Foam™ Cold Brew</h6>
      <Drinkspanel1 img={'./Images/tea.jpg'} head4="310 calories" heads={head2}/>
  
      <div className='col-md-3 oleato-pnl4 '>
          <h3>What's included</h3>
          <hr/>
  
          <h6>Milk</h6>
          <select className='oleato-opt1 mb-3'>
            <option value="Stream Hot" >Stream Hot</option>
            <option value="Stream Hot">Warm</option>
            <option value="Stream Hot">Extra Hot</option>
          </select><br/>
  
          <h6>Milk</h6>
          <select className='oleato-opt1 mb-3'>
            <option value="Heavy Cream">Heavy Cream</option>
            <option value="Vanilla Sweet Cream">Vanilla Sweet Cream</option>
            <option value="2% Milk">2% Milk</option>
            <option value="Whole Milk">Whole Milk</option>
            <option value="Almond">Almond</option>
            <option value="Coconut">Coconut</option>
            <option value="Oat Milk">Oat Milk</option>
            <option value="Soy">Soy</option>
          </select><br/>
  
          <h6>Toppings</h6>
          <select className='oleato-opt1 mb-3'>
            <option value="Extra Pumpkin Spice Topping" >Extra Pumpkin Spice Topping</option>
            <option value="Light Pumpkin Spice Topping">Light Pumpkin Spice Topping</option>
            <option value="No Pumpkin Spice Topping">No Pumpkin Spice Topping</option>
            <option value="Pumpkin Spice Topping">Pumpkin Spice Topping</option>
          </select><br/>
  
          <h6>Chai</h6>
          <div className='oleato-opt1 mb-3 border border-3'>Chai Pump
          <button className='oleato-btn4 px-2 oleato-btn44' onClick={increment2}>-</button>
          <span><b>{increment}</b></span>
          <button className='oleato-btn4 px-2 oleato-btn45' onClick={increment1}>+</button>
          </div>
          
  
          <h6>Add-ins</h6>
          <select className='oleato-opt1 mb-3'>
            <option value="Extra Water" >Extra Water</option>
            <option value="Light Water">Light Water</option>
            <option value="No water">No Water</option>
            <option value="water">Water</option>
          </select><br/>
  
          <button className='oleato-btn5'><h5><GiCursedStar className='mx-1'/><b>Customize</b></h5></button>
      </div>
      <Drinkspanel2/>
      <Drinkspanel3/>
      <Footer/>
      </>
    )
  }
  
  export default Hotteas;