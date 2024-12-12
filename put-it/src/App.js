import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Whiteboard from './components/Whiteboard';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      message: "kom ihåg!",
      activated: false,
      xcoord: 40,
      ycoord: 0,
    },
    {
      id: 2,
      message: "Glöm ej",
      activated: false,
      xcoord: 0,
      ycoord: 0,
    },
    {
      id: 3,
      message: "tvätta",
      activated: false,
      xcoord: 300,
      ycoord: 80,
    },
  ]);

  function updateActivated(id){
    const updatedNotes = notes.map((note) => {
      if (id===note.id){
        return {...note, activated: !note.activated};
      }
      
      return note;
    });
    setNotes(updatedNotes);
  }

  function updateCoords(id){
    const updatedNotes = notes.map((note) => {
      if (id===note.id){
        return {...note, xcoord: note.xcoord+10};
      }
      return note;
    });
    setNotes(updatedNotes);
  }

  return (
    <div className="App">
      <Navbar />
      <Whiteboard notes={notes} setNotes={setNotes} updateActivated={updateActivated} updateCoords={updateCoords}/>
    </div>
  );
}

export default App;
