import React from 'react';

const gamePage = (props)=>{

    return (
        <div>
            <h1>{props.match.params.id}</h1>
            <iframe width="560" 
            title="Tip and Tricks"
            height="315" src={props.location.state.videoSrc}
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
        </div>
    );
}

export default gamePage;