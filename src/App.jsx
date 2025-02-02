import { useState } from 'react'
import './App.css'

function App({setName,name}) {
  const change = (event) => {
    setName(event.target.value);
  }
  return (
    <>
    <h3>Enter your name in the input area</h3>
      <input onChange={change} value={name}></input>
    </>
  )
}

export default App