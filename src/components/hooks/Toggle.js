import React from 'react';
import '../../App.css';

// {/* <button onClick={toggleFunc}>Toggle</button> */ }
const Toggle = ({ toggleFunc }) => {
    return (
        <>
            <label class="switch mt-2">
                <input type="checkbox"></input>
                <span className="slider round" onClick={toggleFunc}></span>
            </label>
        </>
    );
}

export default Toggle;