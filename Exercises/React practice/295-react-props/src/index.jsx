import React from "react";
import { createRoot } from "react-dom/client";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar.img"/>
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <div>
    <h1>My Contacts</h1>
    <Card 
      name="Beyonce"
      img="https://th.bing.com/th/id/OIP.yKGUJLy_NIBl4VfvIBHSdAHaKT?w=202&h=281&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      tel="+123456789"
      email="b@beyonce.com"
    />
   
  </div>
)



// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
