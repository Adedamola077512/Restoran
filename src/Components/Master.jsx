import React from 'react'
import './Master.css' 
import { FaUser } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
const Master = () => {
  return (
    <div className='container py-5 mt-5'>
        <div className='Master-flex' data-aos="fade-up">
            <div className='Master-card'>
              <FaUser className='user'/>
              <h5><b>Master Chefs</b></h5>
              <p className='Master-p'>Diam elitr kasd sed at elitr <br />
              sed ipsum justo dolor sed <br />
              clita amet diam</p>
            </div>
            <div className='Master-card'>
              <PiForkKnifeFill className='user'/>
              <h5><b>Quality Food</b></h5>
              <p className='Master-p'>Elitr diam sed justo kasd <br />
              sed at elitr diam sed <br />
              clita amet diam</p>
            </div>
            <div className='Master-card'>
              <FaShoppingCart className='user'/>
              <h5><b>QOnline Order</b></h5>
              <p className='Master-p'>Elitr diam sed justo kasd <br />
              sed at elitr diam sed <br />
              clita amet diam</p>
            </div>
            <div className='Master-card'>
              <RiCustomerServiceFill className='user'/>
              <h5><b>54/7 Service</b></h5>
              <p className='Master-p'>Elitr diam sed justo kasd <br />
              sed at elitr diam sed <br />
              clita amet diam</p>
            </div>
        </div>
    </div>
  )
}

export default Master