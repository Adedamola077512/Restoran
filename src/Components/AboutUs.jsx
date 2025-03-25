import React from 'react'
import './AboutUs.css'
import { useState, useEffect } from "react";
import { PiForkKnifeFill } from "react-icons/pi";
import about1 from '../assets/about-1.jpg'
import about2 from '../assets/about-2.jpg'
import about3 from '../assets/about-3.jpg'
import about4 from '../assets/about-4.jpg'
const AboutUs = () => {
    const [count15, setCount15] = useState(1);
    const [count50, setCount50] = useState(1);
  
    // Counter for 1 to 15
    useEffect(() => {
      if (count15 < 15) {
        const interval = setInterval(() => setCount15(count15 + 1), 100); // 100ms interval
        return () => clearInterval(interval);
      }
    }, [count15]);
  
    // Counter for 1 to 50
    useEffect(() => {
      if (count50 < 50) {
        const interval = setInterval(() => setCount50(count50 + 1), 100); // 100ms interval
        return () => clearInterval(interval);
      }
    }, [count50]);

  return (
    <div className='container mt-5 py-5'>
        <div className='About-flex'>
            <div>
                <div className='About-flex-1'>
                    <img src={about1} alt='about-1' className='About-img'/>
                    <div className='About-border'><img src={about2} alt="about-2" className='About-img-1'/></div>
                </div>
                <div className='About-flex-2'>
                    <div className='About-border-1'><img src={about3} alt="about-3" className='About-img-2'/></div>
                    <img src={about4} alt="about-4" className='About-img'/>
                </div>
            </div>
            <div>
                <h4 className='About-h4'>About Us</h4>
                <h2 className='About-h2'><b>Welcome to <PiForkKnifeFill className='user'/>Restoran</b></h2>
                <p className='About-p'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam <br />amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                <p className='About-p'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam <br />amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita <br />duo justo magna dolore erat amet</p>
                <div id='About-flex-2'>
                    <div id='About-flex'>
                        <h1 className='About-h1'><b>{count15}</b></h1>
                        <h6 className='About-h6'>Years of <br /><span><b>EXPERIENCE</b></span></h6>
                    </div>
                    <div id='About-flex'>
                        <h1 className='About-h1'><b>{count50} </b></h1>
                        <h6 className='About-h6'>Popular <br /><span><b>MASTER CHEFS</b></span></h6>
                    </div>
                </div>
                <button className='About-btn'>READ MORE</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs