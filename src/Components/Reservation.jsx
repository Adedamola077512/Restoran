import React from 'react'
import './Reservation.css'
const Reservation = () => {
  return (
    <div className='py-lg-5 mt-5' data-aos="fade-up">
      <div className='reservation-flex'>
        <div className='reservation-img'>
          <div className='reservation-center'>
            <button class="button">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
            </button>
          </div>
        </div>
        <div className='reservation-form'>
          <h2 className='reservation-h2'><b>Book Your Table Online</b></h2>
          <p className='reservation-p'>We're open from 10 AM to 9 PM, every day except weekends and holidays.</p>
          <form>
            <input type='text' placeholder='Name' className='name1' />
            <input type='email' placeholder='Email' className=' name1 mt-3' />
            <input type='text' placeholder='Phone Number' className='name2 mt-3'/>
            <input type='date' className='name2 mt-3' />
            <input type='time' placeholder='Phone Number' className='time mt-3'/>
            <input type='text' placeholder='Number of People' className='name2 mt-3'/>
            <textarea name="message" className='Special' placeholder='Special Request' id=""></textarea>
            <button type='submit' className='btn-form'>Book Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reservation