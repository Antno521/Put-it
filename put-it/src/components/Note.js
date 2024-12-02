import { useState, useEffect } from "react";

export default function Note() {
  const [xCoord, setXCoord] = useState(40);
  const [yCoord, setYCoord] = useState(500);
  const [borderColor, setBorderColor] = useState('border-yellow-200')

  const handleNoteClick = () => {
    setBorderColor(prev => prev === 'border-yellow-200' ? 'border-blue-500' : 'border-yellow-200');
  }

  useEffect(() => {
    console.log("hejsvejs");
  })

  return (
    <div className={`size-40 bg-yellow-200 border-2 relative ${borderColor}`} style={{top: `${xCoord}px`, left: `${yCoord}px`}} onClick={handleNoteClick}>
      hej
    </div>
  )
}