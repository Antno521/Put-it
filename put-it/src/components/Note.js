import { useState, useEffect } from "react";

export default function Note(props) {
  const [xCoord, setXCoord] = useState(props.xcoord);
  const [yCoord, setYCoord] = useState(50);
  const [borderColor, setBorderColor] = useState('border-yellow-200')
  const [isActivated, setIsActivated] = useState(props.activated)

  const handleNoteClick = () => {
    setBorderColor(prev => prev === 'border-yellow-200' ? 'border-blue-500' : 'border-yellow-200');
    setIsActivated(prev => prev === false ? true : false);
    props.updateActivated(props.id);
  }

  function reposition() {
    if (isActivated){
      props.moveNote(props.id, xCoord)
    }
  }

  useEffect(() => {
    console.log("hejsvejs");
    console.log(isActivated)
  })

  return (
    <div className={`size-40 bg-yellow-200 border-2 relative ${borderColor}`} style={{top: `${yCoord}px`, left: `${xCoord}px`}} onClick={handleNoteClick}>
      {props.message}
    </div>
  )
}