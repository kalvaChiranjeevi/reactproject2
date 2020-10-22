import React from 'react';
import './style.css';

function Card(props) {
    return (
        <div className="uicard">
            {props.children}
        </div>
    );
}

export default Card;