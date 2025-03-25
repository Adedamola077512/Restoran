import React from 'react'
import Header from '../Components/Header'
import Master from '../Components/Master'
import AboutUs from '../Components/AboutUs'
import FoodMenu from '../Components/FoodMenu'
import Reservation from '../Components/Reservation'
import TeamMenu from '../Components/TeamMenu'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
      <Header />
      <Master />
      <AboutUs />
      <FoodMenu/>
      <Reservation/>
      <TeamMenu/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home