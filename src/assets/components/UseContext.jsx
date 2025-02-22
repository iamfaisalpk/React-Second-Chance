import  Component2 from './Component2'
import { createContext,useState } from "react";

export const userContext = createContext();

const UseContext = ()=>{
    const [count,setCount]=useState(0)
    const [state,setState]=useState(0);

    return(
        <>
            <userContext.Provider value={{count,setCount,state,setState}}>
                <Component2/>
            </userContext.Provider>
        </>
    )
};

export default UseContext;