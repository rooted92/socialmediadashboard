import React from 'react';
import '../../App.css';

const DarkToggle = ({toggleFunc}) => {
    return (
        <button onClick={toggleFunc}>Toggle</button>
    );
}

export default DarkToggle;