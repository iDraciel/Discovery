import React, { Component } from 'react';
import Play from './Play.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitch} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'

class Footer extends Component{
    render(){
        const leftstyle ={
        textDecoration:"none",
        color:"white",
        fontStyle:"inter",
        fontSize:"26px"
        };
        
        return(
<footer className="footer-bar">

<p className="footer-links">
  
                <a href="#" style={leftstyle} href="https://www.google.com">Home</a>

                <a style={leftstyle} href ="https://www.youtube.com">Blog</a>

                <a style={leftstyle} href="https://www.facebook.com">About</a>

                <a style={leftstyle} href="https://www.twitter.com">Contact</a>

            </p>

    <div className="f-right">
  <img src={Play} className="footer-image" />
      <div className="footer-icons">
        <a href="https://www.google.com"><FontAwesomeIcon icon={faFacebook}style={{color:"#3b5998",margin:"10px"}}/></a>
        <a href="https://www.google.com"><FontAwesomeIcon icon={faInstagram} style={{margin:"10px",color:"black"}}  /></a>
        <a href="https://www.google.com"><FontAwesomeIcon icon={faTwitter} style={{color:"#49a1eb",margin:"10px"}} /></a>
        <a href="https://www.google.com"><FontAwesomeIcon icon={faYoutube}  style={{color:"#eb3223",margin:"10px"}} /></a>
        <a href="https://www.google.com"><FontAwesomeIcon icon={faTwitch}  style={{color:"#4B0082",margin:"10px"}} /></a>
    </div>
  
    <div className="f-center">
    <p>2020 @ eSports Discovery. All Rights Reserved</p>
  </div>

</div>

</footer>
        );
    }
}
export default Footer;