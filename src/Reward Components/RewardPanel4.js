import React from 'react';
import './RewardPanel4.css';

const RewardPanel4 = () => {
  return (
    <>
    <div className='container-fluid panel4-box1'>
        
        <h3 className='py-4 text-center'>Cash or card, you earn Stars</h3>
        <span className='panel4-spn1'>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to</span><br/>
        <span className='panel4-spn2'>(really delicious) Rewards.</span>

        <div className='container-fluid panel4-box2'>
            <div className='row'>
                <div className='col-md-2'>
                <h4>1★ Star per dollar</h4>
                <p>Pay as you go</p>
                </div>

                <div className='col-md-1'>
                    <img src="./Images/scanimg.png" className='panel4-img1'/>
                </div>
                <div className='col-md-3'>
                    <h5>Scan and pay separately</h5>
                    <p>Use cash or credit/debit card at the register.</p>
                </div>
                <div className='col-md-1'>
                    <img src="./Images/phone.jpg" className='panel4-img1'/>
                </div>
                <div className='col-md-4'>
                    <h5>Save payment in the app</h5>
                    <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
                </div>
            </div>
        </div>
        <hr/>
        <div className='container-fluid panel4-box2'>
            <div className='row'>
                <div className='col-md-2 '>
                <h4>2★ Stars per dollar</h4>
                <p>Add funds in the app</p>
                </div>

                <div className='col-md-1'>
                    <img src="./Images/loadimg.jpg" className='panel4-img1'/>
                </div>
                <div className='col-md-3'>
                    <h5>Preload</h5>
                    <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                </div>
                <div className='col-md-1'>
                    <img src="./Images/giftimg.jpg" className='panel4-img1'/>
                </div>
                <div className='col-md-3'>
                    <h5>Register your gift card</h5>
                    <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default RewardPanel4;