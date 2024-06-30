import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15) //it was provide two arguement in array format counter and setCounter

// let counter = 15
const addValue = ()=>{
  // counter = counter + 1
  if(counter<20)
  {
    setCounter(counter + 1)
  }
  else
  {
    alert("Counter Limit Exceed");
  }
}

const removeValue = ()=>{
  if(counter>0)
  {
    setCounter(counter-1)
  }
  else
  {
    alert("Nagative Value Not Allow");
  }
}

  return (
    <>
      <h1>Project Using Hooks</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App


//learn about hooks to changind or updating many thing in ui at same time
//learn about useState
//syntax
// let [variableName,functionName] = useState(value of variable)
//example
// Let [counter,setCounter] = useState(0)