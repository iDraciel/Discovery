import React from 'react';
import Video from './Gamecard';
import './GamePage.css';
const gamePage = (props)=>{
  console.log(props.location.state);
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{textAlign:"center",width:'80%'}}>{props.match.params.id}</h1>
            <h3 style={{color:'white'}}>Brief Intro About Game</h3>
            <h4 style={{color:'white'}}>One Video:Getting Started  Two video:Tips and Tricks Three video:Sensitivity</h4>
            <div className="video-container">
             <Video source={props.location.state.video1}></Video>
             <Video source={props.location.state.video2}></Video>
             <Video source={props.location.state.video3}></Video>
             </div>
        </div>
    );
}

export default gamePage;