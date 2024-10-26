import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () => {
    if(count==20) return;
    setCount(count + 1);
    
  }
  const removeValue = () => {
    if(count==0) return;
    setCount(count - 1);
  }
  return (
    <>
     <h1>Counter</h1>
     <p> Value is : {count} </p>
     <button
     onClick={addValue}
     >Add Value {count}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value {count} </button>
     <p> value {count} </p>
    </>
  )
}

export default App
