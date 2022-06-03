import React from 'react';
import './style.css';

export default function App() {
    const myStyle = {
        color: 'red'
    }

  return (
      <div className="app">
        <h1 style = {myStyle}>Hello There! 🤠
        </h1>
      </div>
  )
}
