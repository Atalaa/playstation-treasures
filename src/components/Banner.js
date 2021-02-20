import React from 'react';
import logo from '../assets/logo.png';

const Banner = () => {
  return(
    <div className="playstationBanner">
      <img src={logo} alt="ps4 icon" className="playstationLogo"/>
      <h1 className="playstationTitle">Playstation Treasures</h1>
    </div>
  ) 
};

export default Banner;