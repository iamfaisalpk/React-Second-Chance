import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount]= useState("");
    const [state,setState]= useState([])

    const add = ()=>{
        setState([...state,count])
    }
    
    return (
    <>
        
        <input type="text" value={count} onChange={(event)=> setCount(event.target.value)}/>
        <button onClick={add}>add</button>
        {
            
        }
    </>
)
}

export default UseState;