import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount]= useState(0)

    const Start = ()=>{
        setCount ((prev)=> prev + 1)
    }
    const Stop = ()=>{
        setCount ((prev)=> prev - 1)
    }
    
    return (
    <>
        <h1>your count : {count}</h1>
        <button onClick={Start}>Clicked</button>
        <button onClick={Stop}>Reset</button>
    </>
)
}

export default UseState;