import React, { createContext, useContext } from 'react'
import { userContext } from './UseContext'

const Component2 = () => {
    const {count,setCount,state,setState } = useContext(userContext)

    const reset = ()=>{
        setCount (0)
    }
return (
    <>
        <h1>{count}</h1>
        <button onClick={()=> setCount ((count)=> count + 1)}>click count</button>
        <button onClick={reset}>no count</button>
        <h1>2count value : {state}</h1>
        <button onClick={()=> setState(state + 1)}>click state</button>
    </>
    )
}

export default Component2
