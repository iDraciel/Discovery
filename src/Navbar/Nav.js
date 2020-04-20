import React,{Component} from 'react';
import './Nav.css';
import Logo from './Logo.svg';
import {Link} from 'react-router-dom';
class Nav extends Component {
    render(){
        const mystyle={
            textDecoration:"none",
            fontFamily:'Inter',
            color:" rgba(255, 255, 255, 1)"
              };
        return(
            <div>
            <div className="navigation">
    <nav className="nav-bar">
    <img src={Logo} className="LogoNav"/>
      <ul className="nav-items">
        <li ><Link to="Home" style={mystyle}>Home</Link></li>
        <li><Link to="About"style={mystyle}>Tutorial</Link></li>
      </ul>
    </nav>
  </div>
            </div>
        );
    }

}


export default Nav;