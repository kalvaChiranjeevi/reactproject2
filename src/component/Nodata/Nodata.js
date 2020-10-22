import React from 'react';
import './style.css';

function Nodata() {

    const dstyle = {
    width: '90%',
    position: 'relative',
    height: '300px',
    background: '#fff',
    margin: '0 auto',
    }
    return (
        <div style={dstyle}>
        <div className="Error">
           
            <h1>No Pictures Found</h1>
        
        </div>
        </div>
    );
}

export default Nodata;