import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(e){
    props.onAdd(note);
    setNote({
      title: '',
      content: ''
    }); 
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
