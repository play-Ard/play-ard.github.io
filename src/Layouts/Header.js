import React from "react"
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logoText from "../Assets/Formal.svg"
import playardEducationLogo from "../Assets/EducationBlack.svg"
import Button from 'react-bootstrap/Button';
const Header = () =>
(

<div className=""style={{filter : ' invert(0)'}}>
<Navbar  bg="light" expand="lg">
  <Container>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ">
      
      <Navbar.Brand className="background-changer grow text-center"href="/">  <img style={{width:'18%'}} src={logoText} alt="" /></Navbar.Brand>

        <Link style={{color:'black', textDecoration: 'none'}} className="m-2"to='/about'> About</Link>
        <hr />
        <Link style={{color:'black', textDecoration: 'none'}} className="m-2" to='/documentation'> Documentation</Link>
        <Link style={{color:'black', textDecoration: 'none'}} className="m-2" to='/layoutdesigner'> Designer</Link>
      
        <Link style={{color:'black', textDecoration: 'none'}} className="m-2" to='/contact'> Contact </Link>
        <Link style={{color:'black', textDecoration: 'none'}} className="m-2" to='/shop'> Shop </Link>

        <NavDropdown style={{color:"black"}}title="Games" id="basic-nav-dropdown">
        <Link style={{color:'1c1c1c', textDecoration: 'none'}} className="m-2" to='/millionaire'> Millionaire </Link>
      
          <NavDropdown.Divider />
          <NavDropdown.Item href='/games'>Featured Games</NavDropdown.Item>
        </NavDropdown>

      </Nav>
    </Navbar.Collapse>
   
    <Navbar.Brand className="background-changer grow text-center"href="https://play-ard.github.io/playard-education/">  <img style={{width:'65%'}} src={playardEducationLogo} alt="" /></Navbar.Brand>
   
  </Container>

  <Button variant="outline-dark"><Link style={{ color:'black', textDecoration: 'none'}} className="m-2" to='/login' > Kullanici Girisi  </Link></Button>
  
</Navbar>
</div>
)

export default Header;