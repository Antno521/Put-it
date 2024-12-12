import Note from "./Note"

export default function Whiteboard(props) {

  // Get postition of the mouse
  function handleMouseMove(event) {
    console.log('Mouse position: ', event.clientX, event.clientY);
  }

  // Get the mouse click
  const handleWhiteboardClick = () => {
    console.log('whiteboard click')
    
    // Move all activated Notes
    props.notes.forEach((note) => {
      if (note.activated){
        props.updateCoords(note.id)
      }
    });
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
            ycoord={note.ycoord}
            updateActivated={props.updateActivated}
            updateCoords={props.updateCoords}
          />
        );
      })}
    </div>
  )
}