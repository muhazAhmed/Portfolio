import React from "react";
import "./navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";

const TopNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#home" className="text-white">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="text-white">About</Nav.Link>
            <Nav.Link href="#pricing" className="text-white">Skills</Nav.Link>
            <Nav.Link href="#pricing" className="text-white">Projects</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="text-white">Services</Nav.Link>
            <Nav.Link href="#deets" className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
