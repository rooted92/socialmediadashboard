import React from 'react';
import '../../App.css';

const Toggle = ({toggleFunc}) => {
    return (
        <button onClick={toggleFunc}>Toggle</button>
    );
}

export default Toggle;