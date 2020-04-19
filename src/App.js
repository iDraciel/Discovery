import React, { Component } from 'react';
import './App.css';
import About from './About/About.js';
import Nav from "./Navbar/Nav.js";
import Home from "./Home/Home.js";
import Footer from './footer/Footer.js';
import Card from './Gamecard.js';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


  function App (){
  return (
       <Router>
       <div>
      <Nav/>
    <Switch>
     <Route path="/home" exact component={Home}/>
     <Route path="/Card" exact component={Card}/>
     <Route path="/about" component={About}/>
     <Route path="*" component={Home}/>
     </Switch>
     
     
      </div>
      <Footer />
       </Router>
   
  
     
    
     
     
     
      
   
   
    
  );
}
export default App;

