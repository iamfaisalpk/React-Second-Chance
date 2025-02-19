import React, { useState } from 'react'
import Title from './Title'
import Count from './Count'

const UseClabback = () => {
    const [count,setCount]= useState(0)
    const [state,setstate] = useState (5)

    const Plus = ()=>{
        setCount(count + 1)
    }
    const Plus2 = ()=>{
        setstate(state + 1)
    }
return (
    <>
        <Title/><br/>
        <Count text="count" Count={count}/>
    </>
)
}

export default UseClabback
