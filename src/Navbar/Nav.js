import React,{Component} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
class Nav extends Component {
    render(){
        const mystyle={
            textDecoration:"none",
            fontFamily:'Inter',
            color:" rgba(255, 255, 255, 1)"
              };
        return(
            <div style={{marginTop:'0'}}>
     <div className="navigation">
    <nav className="nav-bar">
      <Link to="/"><div className="discovery">E-Sports Discovery</div></Link>
      <ul className="nav-items">
        <li><Link to="About"style={mystyle}>About</Link></li>
      </ul>
    </nav>
  </div>
            </div>
        );
    }

}


export default Nav;