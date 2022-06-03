import React, { useState } from 'react';
import './style.css';

export default function App() {
    const myStyle = {
        color: 'red'
    }
    const [count, setCount] = useState(0);


    return (
        <div className="app">
            <h1 style={myStyle}>Hello There! 🤠
            </h1>
            <h2>My Count is { count }</h2>
            <p>Start editing to see some magic happen :)</p>
            <button onClick={() => setCount(count + 1)}>Add Count
            </button>
        </div>
    );
}

