import React from "react";
import { useState } from "react";

function ToDoItem(props) {
    const [isCompleted, setCompleted] = useState(false);
    
    function handleClick() {
        setCompleted(!isCompleted);
    }

    return (
        <div onClick={handleClick}
            style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
            <li>{props.text}</li>
        </div>
    );

}

export default ToDoItem;