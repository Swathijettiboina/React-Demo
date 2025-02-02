import { useState } from 'react';
import App from './App.jsx'

function Title(){
    const [name,setName]=useState("")
    return(
        <>
        <App setName={setName} name={name}/>
            <h1>Welcome {name}</h1>
        </>
    )
}
export default Title