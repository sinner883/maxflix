import React from 'react';
import { Link } from 'react-router-dom';

export default function Stack(props) {
    return (
        <Link to='/Details' className="item">
            <img src={props.cover} alt='picts' />
            <div className="overlay">
                <h2>{props.name}</h2>
                <p><strong>Time:</strong> {props.duration}</p>
            </div>
        </Link>
    );
}