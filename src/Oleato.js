import React from "react";
import Header from './Reward Components/Header';
import { useState } from 'react';
import Footer from "./Reward Components/Footer";
import Drinkspanel1 from "./Drinkscomponent/Drinkspanel1";
import Drinkspanel2 from "./Drinkscomponent/Drinkspanel2";
import Drinkspanel3 from "./Drinkscomponent/Drinkspanel3";
import { GiCursedStar } from "react-icons/gi";


const Oleato = () => {

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
   
    let head2 = ["Oleato Golden Foam™","Cold Brew"];
  
    return (
      <>
      <Header/> 
      <hr/>
      <h6>Menu / Cold Coffees / Oleato Golden Foam™ Cold Brew</h6>
        <Drinkspanel1 img={"./Images/olato.jpg"} head4="310 calories" heads={head2}/>
  
        <div className='col-md-3 oleato-pnl4 '>
          <h3>Customized  recipe</h3>
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
  
          <h6>Add-ins</h6>
          <select className='oleato-opt1 mb-3'>
            <option value="Press of Partanna Olive Oil">Press of Partanna Olive Oil</option>
          </select><br/>
  
          <h6>Shot</h6>
            <div className='oleato-opt1 mb-3 border border-3'>Shot
            <button className='oleato-btn4 px-2 oleato-btn44' onClick={increment2}>-</button>
            <span><b>{increment}</b></span>
            <button className='oleato-btn4 px-2 oleato-btn45' onClick={increment1}>+</button>
            </div>
  
          <h6>Expresso & Shot Option</h6>
          <select className='oleato-opt1 mb-3'>
            <option value="Signature Expresso Roast">Signature Expresso Roast</option>
            <option value="Blonde Expresso Roast">Blonde Expresso Roast</option>
            <option value="Decaf Expresso Roast">Decaf Expresso Roast</option>
            <option value="1/3 Decaf Expresso Roast">1/3 Decaf Expresso Roast</option>
            <option value="1/2 Decaf Expresso Roast">1/2 Decaf Expresso Roast</option>
            <option value="2/3 Decaf Expresso Roast">2/3 Decaf Expresso Roast</option>
          </select>
  
          <button className='oleato-btn5'><h5><GiCursedStar className='mx-1'/><b>Customize</b></h5></button>
  
        </div>
        <Drinkspanel2/>
        <Drinkspanel3/>
        <Footer/>
      </>
    )
  }
  
  export default Oleato;