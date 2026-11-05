import React, { useState } from 'react';
import LightSwitch from './Lightswitch';

function Room() {

    const [isOn, setIsOn] = useState(false);

    function toggleLight() {
        setIsOn(!isOn);
    }

    return (
        <div>
            <h2>
                {isOn ? "The room is bright ☀️" : "The room is dark 🌙"}
            </h2>

            <LightSwitch isOn={isOn} toggleLight={toggleLight} />
        </div>
    );
}

export default Room;