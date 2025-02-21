import { createContext,useContext } from "react";
import { useContext } from "react";
import { userContext } from "./UseContext";

const Component2 = ()=>{
    const {count , setCount,state, setState}= useContext(userContext);

    const reset= ()=>{
        setCount(0)
    };

    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=> setCount ((count)=> count + 1)}>clicked count</button>
            <button onClick={reset}>reset</button>
            <p>{state}</p>
            <button onClick={()=> setState ((state)=> +1)}>state click</button>
        </>
    )
};

export default Component2