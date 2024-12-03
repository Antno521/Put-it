import Note from "./Note"

export default function Whiteboard() {
  function handleMouseMove(event){
    console.log('Mouse position: ', event.clientX, event.clientY);
  }

  const handleWhiteboardClick = () => {
    console.log('rara')
    if ("isActivated") {
      
    }
  }

  //Ska kallas på när isActivated är TRUE och när handleWhiteboardClick körs
  function moveNote(){
    
  }
  
  return (
    <div className="w-screen h-[calc(100vh-42px)] border-4 border-blue-500" onMouseMove={handleMouseMove} onClick={handleWhiteboardClick}>
      <Note />
    </div>
  )
}