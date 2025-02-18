import React, { createContext, useState } from 'react';
import Component2 from './Component2';
import Component3 from './Component3';

export const userContext = createContext()

const UseContext = () => {
    const [count,setCount]= useState(0);
    const [state,setState] = useState(0);

    const arr = [1,2,3,4,5]
    const car = {
        name : "iam",
        year : 2000,
        color : "blue"
    }
    return (
        <>
            <userContext.Provider value={{count,setCount, state , setState , arr}}>
                <Component2/>
                <Component3/>
                <Compo/>
            </userContext.Provider>
        </>
)
}

export default UseContext;
