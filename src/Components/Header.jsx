import React from 'react';
import './Header.css';
import hero from '../assets/hero.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-blur'></div>
      <div className='header-flex container'>
        <div className='hero-content'>
          <h1 className='header-h1'>Enjoy Our <br />
          Delicious Meal</h1>
          <p className='header-p'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam <br />amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita <br />duo justo magna dolore erat amet</p>
          <button className='header-btn'>BOOK A TABLE</button>
        </div>
        <div className='hero-content'>
          <img src={hero} alt="hero" className='hero-img'/>
        </div>
      </div>
    </div>
  )
}

export default Header;
