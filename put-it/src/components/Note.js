import { useState, useEffect } from "react";

export default function Note(props) {
  const [xCoord, setXCoord] = useState(props.xcoord); // Sync with props
  const [borderColor, setBorderColor] = useState('border-yellow-200')

   // Effect to update xCoord when props change
   useEffect(() => {
    setXCoord(props.xcoord);
  }, [props.xcoord]); // Runs whenever xcoord updates


  const handleNoteClick = () => {
    setBorderColor(prev => prev === 'border-yellow-200' ? 'border-blue-500' : 'border-yellow-200');
    props.updateActivated(props.id);
  }

  return (
    <div className={`size-40 bg-yellow-200 border-2 relative ${borderColor}`} style={{top: `${props.yCoord}px`, left: `${xCoord}px`}} onClick={handleNoteClick}>
      {props.message}
    </div>
  )
}