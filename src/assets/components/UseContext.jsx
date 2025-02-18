import React, { createContext, useState } from 'react';

const userContext = createContext()

const UseContext = () => {
    const [count,setCount]= useState(0)
    return (
        <>
            <userContext.Provider value={{}}>
                
            </userContext.Provider>
        </>
)
}

export default UseContext;
