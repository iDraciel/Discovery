import React,{Component} from 'react';
import Game from './Games/Games.js';
import Event from './Events/Events.js';
class Home extends Component {
    render(){
        return(
         <div>
             <Game/>
             <Event/>
         </div>
        );
    }
}
export default Home;