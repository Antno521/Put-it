import { useState } from "react";

export default function Note(props) {
  const [borderColor, setBorderColor] = useState('border-yellow-200')

  const handleNoteClick = () => {
    setBorderColor(prev => prev === 'border-yellow-200' ? 'border-blue-500' : 'border-yellow-200');
    props.updateActivated(props.id);
  }

  return (
    <div className={`size-40 bg-yellow-200 border-2 relative ${borderColor}`} style={{top: `${props.yCoord}px`, left: `${props.xCoord}px`}} onClick={handleNoteClick}>
      {props.message}
    </div>
  )
}