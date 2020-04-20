import React, { Component } from 'react';
import './App.css';
import ErrorPage from './Error/Error.js';
import About from './About/About.js';
import Nav from "./Navbar/Nav.js";
import Home from "./Home/Home.js";
import Footer from './footer/Footer.js';
<<<<<<< HEAD
import GamePage from './GamePage/GamePage.js';
=======
import GamePage from './GamePage/GamePage';
>>>>>>> 9d3d71e65d12418d95bdfe32adebe725fa6c26d1
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


  function App (){
  return (
       <Router>
       <div>
      <Nav/>
      
    <Switch>
<<<<<<< HEAD
     <Route path="/" exact component={Home}/>
     <Route path="/Home" exact component={Home}/>
     <Route path="/about" component={About}/>
=======
     <Route path="/home" exact component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/:id" component={GamePage}/>
     <Route path="*" component={Home}/>
     </Switch>
>>>>>>> 9d3d71e65d12418d95bdfe32adebe725fa6c26d1
     
     <Route path="/:id" component={GamePage}/>
     <Route path="*" component={ErrorPage}/>
     </Switch>
    
     
      </div>
      <Footer />
       </Router>
   
  
     
    
     
     
     
      
   
   
    
  );
}
export default App;

