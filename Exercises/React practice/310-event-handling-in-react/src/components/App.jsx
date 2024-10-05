import React from "react";
import { useState } from "react";

function App() {

  const [headingText, setHeading] = useState('Hello');

  function onButtonClick() {
    setHeading('Submitted');
  }

  function onMouseOver(e) {
    e.target.style.background = 'black';
  }

  function onMouseOut(e) {
    e.target.style.background = 'white';
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onButtonClick}>
        Submit</button>
    </div>
  );
}

export default App;
