import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

createRoot(document.getElementById('root')).render(
    <App />
  )

//Challenge:
//1. Given that you can get the current time using:
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
