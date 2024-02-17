import React from 'react';
import Header from './Reward Components/Header';
import Star from './Reward Components/star';
import Started from './Reward Components/started';
import Slider from './Reward Components/slider';
import Footer from './Reward Components/Footer';

export const Rewards = () => {

  let img1 = "./Images/025.png";
  let img2 = "./Images/100.png";
  let img3 = "./Images/200.png";
  let img4 = "./Images/300.png";
  let img5 = "./Images/400.png";

  const images = [img1,img2,img3,img4,img5];

  let head1 = "Customize your drink";
  let head2 = "Brewed hot or iced coffee or tea, bakery item, packaged snack and more";
  let head3 = "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast";
  let head4 = "Sandwich, protein box or at-home coffee";
  let head5 = "Select Starbucks® merchandise";

  const headings = [head1,head2,head3,head4,head5];

  let para1 = "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.";
  let para2 = "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.";
  let para3 = "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.";
  let para4 = "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.";
  let para5 = "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.";

  const paragraphs=[para1,para2,para3,para4,para5];

  return (
    <>
    <Header/>
    <Star/>
    <Started/>
    <Slider image={images} heading={headings} paragraph={paragraphs} />
    <Footer/>
    </>
  )
}
