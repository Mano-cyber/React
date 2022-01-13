// Import the react and reactDOM library
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = { text:'Click Me!'};
    const labelText = { text:'Enter your name: '};
    
    return (
    <div>
        <label className="label" htmlFor="name">{labelText.text} </label>
        <input id="name" type="text" />
        <button style ={{backgroundColor: 'blue', color:'white'}}>{buttonText.text}</button>
    </div>
    );
};

// Show react component on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)