import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [heading, setHeading] = useState('');
  
  function handleChange(e){
    setName(e.target.value);
  }

  function handleClick(e){
    e.preventDefault();
    setHeading(name)
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}>
      <input 
      onChange={handleChange}
      type="text" 
      placeholder="What's your name?"
      value={name}
      />
      <button type='submit' onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
