import { useState } from 'react';
import './App.css'

function App() {


  // let counter = 0;

  const [counter,setCounter] = useState(0);

  const addCounter = ()=>{
    setCounter(prevCounter => prevCounter + 1);
    // console.log("clicked",counter);
  }

  const decCounter = ()=>{
    if(counter <= 0){
      setCounter(counter = 0);
    }
    else{
      setCounter(prevCounter => prevCounter - 1);
      // console.log("clicked",counter);
    }
  }

  return (
    <>
      <h1> Counter: {counter}</h1>
      <button onClick={addCounter}> Add value</button>
      <br />
      <button onClick={decCounter}> Remove value</button>
    </>
  )
}

export default App
