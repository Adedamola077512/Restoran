import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ No BrowserRouter here

import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home';  
import About from './Pages/About';
import Service from './Pages/Service';
import Menu from './Pages/Menu';
import Page from './Pages/Page';
import Booking from './Pages/Booking';
import Contact from './Pages/Contact';
import Testimonials from './Pages/Testimonials';
import OurTeam from './Pages/OurTeam';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/page" element={<Page />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
