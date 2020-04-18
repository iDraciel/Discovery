import React, { Component } from 'react';
import Game from './Games/Games.js';
import './App.css';
import Footer from './footer/Footer.js';
import Events from './Events/Events.js';
class App extends Component{

  render() {
    const mystyle={
  textDecoration:"none",
  fontFamily:'Inter',
  color:" rgba(255, 255, 255, 1)"
    };
  return (
    
    <div className="App">
      <div className="navigation">
    <nav className="nav-bar">
     
      <ul className="nav-items">
        <li><a style={mystyle} href="Games-section">Top Games</a></li>
        <li><a  style={mystyle} href="#Events-section">Live Events</a></li>
      </ul>
    </nav>
  
  </div>
      <h1><b>TOP GAMES</b></h1>
      <section id="Games-section">
      <Game />
      </section>
      <h1><b>LIVE EVENTS</b></h1>
     <section id="Events-section">
     <Events />
     </section>
     <Footer />
    </div>
  
  );
}
}
export default App;
