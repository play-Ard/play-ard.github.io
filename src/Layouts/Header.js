import React from "react"
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";
import playardRetro from "../Assets/playard_logo_green.svg";

const Header = () => (
  <div style={{ filter: 'invert(0)' }}>
    <Navbar bg="light" expand="lg" style={{ padding: '5px 0', height: '60px' }}> {/* Adjust padding and height */}
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center"> {/* Centers the content */}
          <Nav className="d-flex justify-content-center align-items-center" style={{ width: '100%' }}> {/* Flexbox to center horizontally */}
            <Navbar.Brand href="/" style={{ marginRight: '20px' }}>
              <img style={{ width: '50px', height: 'auto' }} src={playardRetro} alt="Playard Logo" />
            </Navbar.Brand>

            {/* Center the Links */}
            <Link style={{ color: 'black', textDecoration: 'none', margin: '0 15px' }} to='/about'>About</Link>
            <Link style={{ color: 'black', textDecoration: 'none', margin: '0 15px' }} to='/documentation'>Documentation</Link>
            <Link style={{ color: 'black', textDecoration: 'none', margin: '0 15px' }} to='/roadmap'>Feature Roadmap</Link>
            <Link style={{ color: 'black', textDecoration: 'none', margin: '0 15px' }} to='/contact'>Contact</Link>
            <Link style={{ color: 'black', textDecoration: 'none', margin: '0 15px' }} to='/shop'>Shop</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default Header;
