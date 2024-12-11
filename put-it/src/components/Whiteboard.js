import { useState } from "react";
import Note from "./Note"

export default function Whiteboard() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      message: "kom ihåg!",
      activated: false,
      xcoord: 40,
    },
    {
      id: 2,
      message: "Glöm ej",
      activated: false,
      xcoord: 0,
    },
    {
      id: 3,
      message: "tvätta",
      activated: false,
      xcoord: 300,
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
  function moveNote(id, newX) {
    console.log("Flytta lapp i whiteboard")
  }

  function updateActivated(id){
    const updatedNotes = notes.map((note) => {
      if (id==note.id){
        return {...note, activated: !note.activated};
      }
      
      return note;
    });
    setNotes(updatedNotes);
  }

  return (
    <div className="w-screen h-[calc(100vh-42px)] border-4 border-blue-500" onMouseMove={handleMouseMove} onClick={handleWhiteboardClick}>
      {notes.map((note) => {
        console.log(note);
        return (
          <Note 
            id={note.id} 
            message={note.message} 
            activated={note.activated}
            xcoord={note.xcoord}
            moveNote={moveNote}
            updateActivated={updateActivated}
          />
        );
      })}
    </div>
  )
}