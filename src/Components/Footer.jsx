import React from 'react';
import './Footer.css';
import { IoIosArrowForward } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-flex">
        {/* Company Section */}
        <div className="footer-grid">
          <h4 className="footer-h4">Company</h4>
          <span><IoIosArrowForward /> About Us</span>
          <span><IoIosArrowForward /> Contact Us</span>
          <span><IoIosArrowForward /> Reservation</span>
          <span><IoIosArrowForward /> Privacy Policy</span>
          <span><IoIosArrowForward /> Terms & Conditions</span>
        </div>

        {/* Contact Section */}
        <div className="footer-grid">
          <h4 className="footer-h4">Contact</h4>
          <span><FaLocationDot className="iconn" /> 123 Street, New York, USA</span>
          <span><FaPhoneAlt className="iconn" /> +012 345 67890</span>
          <span><IoMdMail className="iconn" /> info@example.com</span>

          {/* Social Media Icons */}
          <ul className="wrapper">
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <span><FaFacebook className='face'/></span>
            </li>
            <li className="icon twitter">
              <span className="tooltip">Twitter</span>
              <span><FaSquareTwitter className='face'/></span>
            </li>
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <span><FaInstagram className='face'/></span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="footer-grid">
          <h4 className="footer-h4">Opening</h4>
          <span><h5>Monday - Saturday</h5></span>
          <span>09 AM - 09 PM</span>
          <span><h5>Sunday</h5></span>
          <span>10 AM - 08 PM</span>
        </div>

        {/* Newsletter */}
        <div className="footer-grid">
          <h4 className="footer-h4">Newsletter</h4>
          <p>Stay updated with our latest news!</p>
          <input type="text" placeholder="Enter your email" className="news-input" />
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© Your Site Name, All Right Reserved. Developed by <span className='steady'>Obadimu Adedamola</span></p>
      </div>
    </div>
  );
};

export default Footer;
