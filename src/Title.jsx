import { useState } from 'react';
import Form from './App.jsx'

function Title(){
        const [name,setName]=useState("")
    const getData=(data)=>{
        setName(data)
    };
    return(
        <>
        <Form onSubmit={getData}/>
            <h1>Welcome {name}</h1>
        </>
    )
}
export default Title