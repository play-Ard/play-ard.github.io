import React from "react"
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Header = () =>
(
  <div style={{filter : ' invert(1)'}}>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Retro Gaming Console</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/layoutdesigner">Layout Designer</Nav.Link>
        <Nav.Link href="/layoutdesigner">Layout</Nav.Link>
        <NavDropdown title="Games" id="basic-nav-dropdown">
          <NavDropdown.Item href="/millionaire">Millionaire</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Finger War - WiFi</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Not Not</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='/games'>Featured Games</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
)

export default Header;