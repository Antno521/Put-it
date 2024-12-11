import { useState } from "react";
import Note from "./Note"

export default function Whiteboard() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      message: "kom ihåg!",
    },
    {
      id: 2,
      message: "Glöm ej",
    },
    {
      id: 3,
      message: "tvätta",
    },
  ]);

  function handleMouseMove(event) {
    console.log('Mouse position: ', event.clientX, event.clientY);
  }

  const handleWhiteboardClick = () => {
    console.log('rara')
    if ("isActivated") {

    }
  }

  //Ska kallas på när isActivated är TRUE och när handleWhiteboardClick körs
  function moveNote() {

  }

  return (
    <div className="w-screen h-[calc(100vh-42px)] border-4 border-blue-500" onMouseMove={handleMouseMove} onClick={handleWhiteboardClick}>
      {notes.map((note) => {
        console.log(note);
        return (
          <Note 
            key={note.id} 
            message={note.message} 
          />
        );
      })}
    </div>
  )
}