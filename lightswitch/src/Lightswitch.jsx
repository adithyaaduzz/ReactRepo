import React from 'react';

function LightSwitch({ isOn, toggleLight }) {

    return (
        <button onClick={toggleLight}>
            {isOn ? "Turn OFF" : "Turn ON"}
        </button>
    );
}

export default LightSwitch;