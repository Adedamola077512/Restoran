import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PiForkKnifeFill } from "react-icons/pi";
// import { FaBookReader } from "react-icons/fa";
import './NavigationBar.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="light" sticky="top" className="py-3 scalloped">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand className="Kider">
        <PiForkKnifeFill className='CiForkAndKnife'/>Restoran
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" className='Toggle'/>
        <Navbar.Collapse id="navbar-nav" className="Nav">
          <Nav className="">
            {/* Navigation Links */}
            <Nav.Link as={Link} to="/" className="home" id="line">HOME</Nav.Link>
            <Nav.Link as={Link} to="/about" className="home">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/service" className="home">SERVICE</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="home">MENU</Nav.Link>
            
            {/* Dropdown Menu */}
            <NavDropdown title="PAGE" id="page-dropdown">
              <NavDropdown.Item className='booking' as={Link} to="/booking">Booking</NavDropdown.Item>
              <NavDropdown.Item className='booking' as={Link} to="/ourTeam">Our Team</NavDropdown.Item>
              <NavDropdown.Item className='booking' as={Link} to="/testimonials">Testimonials</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contact" className="home">CONTACT</Nav.Link>
            {/* Sign-Up Button */}
          <Button variant="primary" className="btn btn-primary btn-rounded">
            BOOK A TABLE
          </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
