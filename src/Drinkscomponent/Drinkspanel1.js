import React from 'react';

const Drinkspanel1 = (props) => {
  return (
    <>
        <div className='container-fluid oleato-pnl1'>
        <div className='row'>
          <div className='col-md-3 '>
            <img src={props.img} className='home-panel-img1 oleatoimg1'/>
          </div>
          <div className='col-md-3 oleato-b1'>
            <h2 className='oleato-b11'><b>{props.heads[0]}</b></h2>
            <h2><b>{props.heads[1]}</b></h2>
            <h4>{props.head4}</h4>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Drinkspanel1;

