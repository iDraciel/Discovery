import React, { Component } from 'react';
import './Error.css';
import Home from '../Home/Home.js';
import {Link} from 'react-router-dom';
class ErrorPage extends Component{
    render(){
        return(
            <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <Link to="/">Home</Link>
            </div>
        </div>
        );
    }
}
export default ErrorPage;