import { useState } from "react";
import Note from "./Note"

export default function Whiteboard(props) {
  function handleMouseMove(event) {
    console.log('Mouse position: ', event.clientX, event.clientY);
  }

  const handleWhiteboardClick = () => {
    console.log('rara')
    if ("isActivated") {

    }
  }

  //Ska kallas på när isActivated är TRUE och när handleWhiteboardClick körs
  function moveNote(id, activated, newX) {
    if (activated){
      updateCoords(id);
    }
  }

  

  function updateCoords(id){
    const updatedNotes = props.notes.map((note) => {
      if (id==note.id){
        return {...note, xcoord: note.xcoord+10};
      }
      
      return note;
    });
    props.setNotes(updatedNotes);
  }

  return (
    <div className="w-screen h-[calc(100vh-42px)] border-4 border-blue-500" onMouseMove={handleMouseMove} onClick={handleWhiteboardClick}>
      {props.notes.map((note) => {
        console.log(note);
        return (
          <Note 
            id={note.id} 
            message={note.message} 
            activated={note.activated}
            xcoord={note.xcoord}
            moveNote={moveNote}
            updateActivated={props.updateActivated}
          />
        );
      })}
    </div>
  )
}