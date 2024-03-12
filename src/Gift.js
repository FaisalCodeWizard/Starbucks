import React from 'react';
import Header from './Reward Components/Header';
import GiftSlider from './Gift Components/GiftSlider';
import GiftPanel2 from './Gift Components/GiftPanel2';
import GiftPanel3 from './Gift Components/GiftPanel3';

export const Gift = () => {

  let img1 = './Images/feature1.jpg';
  let img2 = './Images/feature2jpg.jpg';
  let img3 = './Images/feature3.jpg';
  let img4 = './Images/feature4.jpg';
  let img5 = './Images/feature5.jpg';
  let img6 = './Images/feature6.jpg';
  let img7 = './Images/feature7.jpg';
  let img8 = './Images/feature8.jpg';
  let img9 = './Images/feature9.jpg';
  let img10 = './Images/feature10.jpg';
  let img11 = './Images/feature11.jpg';
  let img12 = './Images/feature12.jpg';
  let img13 = './Images/feature13.jpg';
  let img14 = './Images/feature14.jpg';
  let img15 = './Images/feature15.jpg';
  let img16 = './Images/feature16.jpg';
  let img17 = './Images/feature17.jpg';

  let images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17];

  let img18 = './Images/val1.jpg';
  let img19 = './Images/val2.jpg';
  let img20 = './Images/val3.jpg';
  let img21 = './Images/val4.jpg';

  let images1 = [img18,img19,img20,img21];

  let img22 = './Images/win1.jpg';
  let img23 = './Images/win2.jpg';
  let img24 = './Images/win3.jpg';
  let img25 = './Images/win4.jpg';
  let img26 = './Images/win5.jpg';

  let images2 = [img22,img23,img24,img25,img26];

  let img27 = './Images/bir1.jpg';
  let img28 = './Images/bir2.jpg';
  let img29 = './Images/bir3.jpg';
  let img30 = './Images/bir4.jpg';
  let img31 = './Images/bir5.jpg';

  let images3 = [img27,img28,img29,img30,img31];

  let img32 = './Images/ty1.jpg';
  let img33 = './Images/ty2.jpg';
  let img34 = './Images/ty3.jpg';
  let img35 = './Images/ty4.jpg';

  let images4 = [img32,img33,img34,img35];
  
  let img36 = './Images/cel1.jpg';
  let img37 = './Images/cel2.jpg';
  let img38 = './Images/cel3.jpg';
  let img39 = './Images/cel4.jpg';

  let images5 = [img36,img37,img38,img39];
    
  let img40 = './Images/enc2.jpg';
  let img41 = './Images/enc3.jpg';
  let img42 = './Images/enc4.jpg';
  let img43 = './Images/enc5.jpg';

  let images6 = [img40,img41,img42,img43];

  let img44 = './Images/place1.jpg';
  let img45 = './Images/place2.jpg';
  let img46 = './Images/place3.jpg';
  let img47 = './Images/place4.jpg';

  let images7 = [img44,img45,img46,img47];
    
  return (
    <>
    <Header/>
    <GiftSlider image={images} name="FEATURED"/>
    <GiftPanel2/>
    <GiftPanel3/>
    </>
  )
}

export default Gift;
