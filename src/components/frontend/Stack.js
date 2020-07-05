import React from 'react';

export default function Stack(props) {
    return <div className="item">
        <img src={props.cover} alt='picts' />
        <div className="overlay">
            <h2>{props.name}</h2>
            <p><strong>Time:</strong> {props.duration}</p>
        </div>
    </div>
}