import React, { useEffect } from "react";
import navIcon from "../images/Group 21.png";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "../Styles/Navbar.css";

const Navbar1 = ({data}) => {
  useEffect(()=>{

  },[])
  return (
    <Navbar expand="lg" className=" nav-wrap">
      <Container>
        <Navbar.Brand href="#home">
          <img src={navIcon} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle className="nn" aria-controls="basic-navbar-nav">
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">Solutions</Nav.Link>
            <Nav.Link href="#link"className="text-light">Products</Nav.Link>
            <Nav.Link href="#link"className="text-light">About</Nav.Link>
            <Nav.Link href="#link"className="text-light">Blog</Nav.Link>
            <Nav.Link href="#link"className="text-light">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
