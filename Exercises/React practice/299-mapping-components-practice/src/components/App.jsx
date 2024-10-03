import React from "react";
import Emoji from "./Emoji";
import emojipedia from '../emojipedia';

//1. Create Emoji component
//2. Create props to replace hardcore data.
//3a. Import the emojipedia const.
//3b. Mat through the emojipedia array and render Entry component.

function createEmoji(emoji){
  return (
    <Emoji 
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
          {emojipedia.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
