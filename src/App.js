import React, { Component } from 'react';
import './App.css';
import Home from "./Home/Home.js";
import Footer from './footer/Footer.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
     <Router>
      <ul className="nav-items">
        <li><a style={mystyle} href="Games-section"> <Link to="/HomeComp">Home</Link></a></li>
        <li><a  style={mystyle} href="#Events-section"> <Link to="/TutorialComp">Tutorial</Link></a></li>
      </ul>
      <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/TutorialComp" component={TutorialComp}/>
          <Route path="*" component={Home}/>
        </Switch>
        </Router>
    </nav>
  </div>
      <h1><b>TOP GAMES</b></h1>
      
     <Footer />
    </div>
  
  );
}
}
function HomeComp (){
  return <div>
    <Home />
  </div>
} 
function TutorialComp(){
  return <div>
    <h1>Hello</h1>
    <h2>Let's Go</h2>
    <p>My name</p>
  </div>
}
export default App;
