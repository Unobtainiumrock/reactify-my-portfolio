
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from './Unobtainiumrock.png';
// import './NavMenu.css';

const NavMenu = (props) => {
  return (
    <Navbar className="navbar navbar-expand-md navbar-dark bg-dark animated fadeInDown">
    <a className="navbar-brand" onClick={props.onClick}>
      <img src={logo} height="90px" alt="company logo" />
    </a>
    {/* Hamburger button thing */}
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <Button href="#" className="nav-button" id="about-me">About</Button>
        <Button href="#" className="nav-button" id="my-portfolio">Portfolio</Button>
        <Button href="#" className="nav-button" id="contact-me">Contact</Button>
      </ul>
    </div>

  </Navbar>
  )
}

export default NavMenu;
