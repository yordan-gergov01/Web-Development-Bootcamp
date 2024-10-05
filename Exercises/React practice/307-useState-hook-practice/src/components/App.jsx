import React, {useState} from "react";


function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);
  
  function updateTime (){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  function sayHi() {
      updateTime();
    }
    setInterval(sayHi, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
