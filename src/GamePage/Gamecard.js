import React, { Component } from 'react';
import './GamePage.css'
class Card extends Component{
    render(){
        return(
            <div className="video-card">
              <iframe  src={this.props.source}
              frameBorder="0" className="iframe">
             </iframe>
     </div>
         
        );
    }
}
export default Card;