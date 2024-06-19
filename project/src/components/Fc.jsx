import React from 'react'
import { useState } from 'react';

function Fc() {
    const [text, setText] = useState("null");

    const inputChangeHandler = (event) => {
        setText(event.target.value);
    };

    return (
        <div>  
            Enter your name <input onChange={inputChangeHandler} />
            <br />
            <p>{text}</p>
        </div>
    )
}

export default Fc