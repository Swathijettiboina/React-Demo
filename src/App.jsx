import { useState } from 'react'
import './App.css'

function App(props) {
  const [name, setName] = useState("Swathi")
  const change = (event) => {
    const newName = event.target.value;
    setName(event.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    props.onSubmit(name);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={change} value={name}></input>
        <button type='submit'>Click me</button>
      </form>

    </>
  )
}

export default App
