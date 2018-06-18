import React, { Component } from 'react';
// Figure out how to switch fully from bootstrap to react-bootstrap later.
import { NavMenu, About, Footer } from '../index';
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
  // Pass it as a callback, on props, down to NavMenu
  returnHome(event) {
    this.setState({ blank: 'Not blank!!' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavMenu onClick={this.returnHome.bind(this)} />
        </header>
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
