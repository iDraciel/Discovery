import React, { Component } from 'react';
import CSGO from './CS-Game.jpg';
import DOTA from './DOTA-Game.jpg';
import PUBG from './PUBG-Game.jpg';
import LOL from './LOL-Game.jpg';
import './Games.css';

class Game extends Component{
       
    render(){
  return( <div className="flex-container">
          <div className="card">
      <img src={DOTA} alt="DOTA" className="pic"/>
     <button className="button button2">Learn More</button>
     <button className="button button1">Play</button>
    </div>
       <div className="card">
      <img src={CSGO} alt="CSGO" className="pic"/>
     <button className="button button2">Learn More</button>
     <button className="button button1">Play</button>
       </div>
      <div className="card">
      <img src={PUBG} alt="PUBG" className="pic"/>
     <button className="button button2">Learn More</button>
     <button className="button button1">Play</button>
       </div>
     <div className="card">
      <img src={LOL} alt="LOL" className="pic"/>
     <button className="button button2">Learn More</button>
     <button className="button button1">Play</button>
       </div>
       </div>
  );
}
}
export default Game;