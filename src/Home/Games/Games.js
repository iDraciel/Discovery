import React, { Component } from 'react';
import CSGO from './CS-Game.jpg';
import DOTA from './DOTA-Game.jpg';
import PUBG from './PUBG-Game.jpg';
import LOL from './LOL-Game.jpg';
import './Games.css';
import {BrowserRouter as Router,Route ,Link} from 'react-router-dom';
class Game extends Component{
       
    render(){
    
  return(
    <div>
      <h1>Top Games</h1>
    <div className="game-content"> <div className="flex-container">
          <div className="card">
      <img src={DOTA} alt="DOTA" className="pic"/>
      
      <button className="button button2"><Link to="Card">Tutorial</Link></button>
      
    
     <button className="button button1">Play</button>
    </div>
       <div className="card">
      <img src={CSGO} alt="CSGO" className="pic"/>
     <button className="button button2">Learn More</button>
     <button className="button button1">Play</button>
       </div>>
      
      <div className="card">
         <img src={PUBG} alt="PUBG" className="pic"/> 
         <Link to={{
           pathname:"/PUBG",
           state:{
             video1:"https://www.youtube.com/embed/tgbNymZ7vqY",
             video2:"https://www.youtube.com/embed/tgbNymZ7vqY",
             video3:"https://www.youtube.com/embed/tgbNymZ7vqY"
           }
         }}>
       <button className="button button2">Learn More</button> </Link>
        <button className="button button1">Play</button>
       </div>
       
     <div className="card">
      <img src={LOL} alt="LOL" className="pic"/>
     <button className="button button2">Learn More</button>
     <button className="button button1">Play</button>
       </div>
       </div>
       </div>


       </div>
  );
}
}
export default Game;