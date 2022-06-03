import React, {useState} from "react";
import "./App.css";

export default function App() {
        const myStyle = {
               color: "red",
        }
        const [count, setCount] = React.useState(0);


    return (
        <div className="App">
            <h1 style = {myStyle}>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <p>You clicked {count} times</p>
            <h1> MyCount is {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            

        </div>
    )
}
