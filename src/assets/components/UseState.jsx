// import React, { useState } from 'react'

// const UseState = () => {
//     const [count,setCount]= useState("");
//     const [state,setState]= useState([])

//     const add = ()=>{
//         setState([...state,count])
//     }
    
//     return (
//     <>
        
//         <input type="text" value={count} onChange={(event)=> setCount(event.target.value)}/>
//         <button onClick={add}>add</button>
//         {
//             state.map((value)=>(
//                 <li>{value}</li>
//             ))
//         }
//     </>
// )
// }

// export default UseState;

                        /* this methode in object */

import React,{useState} from "react";

const UseState = ()=>{
    const [count,setCount]= useState({
        name: "faizy",
        age : "19"
    });

    const [state,setState]=useState(0);
    const add = ()=>{
        // setState (state + 1)
        setState(prevState => prevState +1)
    }
    return (
        <>
            {count.name} <br/>{count.age} <br />
            <h1>your {state}</h1>
            <button onClick={add}>count</button><br/>
            <button onClick={()=> setCount ({...count ,age : 18})}>Changing</button>
        </>
    );
};

export default UseState;