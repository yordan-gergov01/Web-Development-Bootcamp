// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import { createRoot } from "react-dom/client";
import cars from "./practice";

const [honda, tesla] = cars;
const {speedStats: {topSpeed: hondaTopSpeed}} = honda;
const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;
const {coloursByPopularity: [hondaTopColor]} = honda;
const {coloursByPopularity: [teslaTopColor]} = tesla;


createRoot(document.getElementById('root')).render(
    <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColor}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColor}</td>
    </tr>
  </table>
  )

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
