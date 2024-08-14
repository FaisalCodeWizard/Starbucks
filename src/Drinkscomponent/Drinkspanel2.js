import React from 'react';
import './Drinks.css';
 
const Drinkspanel2 = () => {
  return (
    <>
      <div className='container-fluid pt-5 drnks-panel2-b1'>

        <button className='drnks-pnl2-btn1 px-1'>200★Stars item</button>
        <br/>
        <div className='drnks-pnl2-spn'></div>
        <span >Starbucks® Blonde Espresso Roast combined with notes of warm</span><br/>
        <span>toffeenut and creamy oatmilk, topped with lush vanilla sweet,</span><br/>
        <span>cream infused with Partanna® extra virgin olive oil.</span>
        <h6 className='my-4 drnks-pnl2-b12'>360 calories, 22g sugar, 28g fat</h6>

        <div className='col-md-6'>
        <button className='drnks-panel2-btn2'><h6>Full Nutrition and Ingredients list</h6></button>
        </div>
      </div>
    </>
  )
}

export default Drinkspanel2;
