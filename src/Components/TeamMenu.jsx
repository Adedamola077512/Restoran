import React from 'react'
import './TeamMenu.css'
import team1 from '../assets/team-1.jpg'
import team2 from '../assets/team-2.jpg'
import team3 from '../assets/team-3.jpg'
import team4 from '../assets/team-4.jpg'
const TeamMenu = () => {
  return (
    <div className='container mt-5 py-5' data-aos="fade-up">
        <div class="menu-header">
           <span class="line"></span>
           <h2 class="title">Food Menu</h2>
           <span class="line"></span>
        </div>
        <div className='text-center'>
          <h1><b>Our Master Chefs</b></h1>
        </div>
        <div className='team-flex'>
            <div className='team-card'>
                <img src={team1} alt="" className='team-img'/>
                <h5><b>Full Name</b></h5>
                <p>Designation</p>
            </div>
            <div className='team-card'>
                <img src={team2} alt="" className='team-img'/>
                <h5><b>Full Name</b></h5>
                <p>Designation</p>
            </div>
            <div className='team-card'>
                <img src={team3} alt="" className='team-img'/>
                <h5><b>Full Name</b></h5>
                <p>Designation</p>
            </div>
            <div className='team-card'>
                <img src={team4} alt="" className='team-img'/>
                <h5><b>Full Name</b></h5>
                <p>Designation</p>
            </div>
        </div>
    </div>
  )
}

export default TeamMenu