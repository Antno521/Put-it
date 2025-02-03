import Note from "./Note"

export default function Whiteboard(props) {

  // Get postition of the mouse
  function handleMouseMove(event) {
    console.log('Mouse position: ', event.clientX, event.clientY);
  }

  // Get the mouse click
  const handleWhiteboardClick = () => {
    console.log('whiteboard click')
    props.updateCoords()
  }

  return (
    <div className="w-screen h-[calc(100vh-42px)] border-4 border-blue-500" onMouseMove={handleMouseMove} onClick={handleWhiteboardClick}>
      {props.notes.map((note) => {
        return (
          <Note
            key={note.id} 
            id={note.id} 
            message={note.message} 
            activated={note.activated}
            xcoord={note.xcoord}
            ycoord={note.ycoord}
            updateActivated={props.updateActivated}
          />
        );
      })}
    </div>
  )
}