import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    // I will use you later for fetching something.. 
    this.state = {
      blank: ''
    }

  }
  // Bullshit thing for now just to trigger a re-render for simulating going to homepage.
  returnHome(event) {
    this.setState({ blank: 'Not blank!!' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar className="navbar navbar-expand-md navbar-dark bg-dark animated fadeInDown">
            <a className="navbar-brand" onClick={this.returnHome.bind(this)}>
              <img src="src/images/Unobtainiumrock-logo.png" height="90px" alt="company logo" />
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
        </header>
      </div>
    );
  }
}

export default App;
