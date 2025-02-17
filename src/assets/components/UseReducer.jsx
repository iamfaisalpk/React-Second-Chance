// import React,{useReducer,useState} from "react";

// const reducer = (state,action)=>{
//     // switch(action.type){
//     //     case 'increment' :
//     //         return{count : state.count +1}
//     //     case 'decrement' :
//     //         return{count : state.count -1}
//     //     default :
//     //         return state
//     // }

//     if(action.type == "increment"){
//         return {count : state.count +1}
//     }
//     if(action.type == "decrement"){
//         return {count : state.count -1}
//     }
    
// }

// const UseReducer = ()=>{
//     const [state ,dispatch]= useReducer(reducer,{count : 0})
//     // const [count,setCount]= useState(0);
//     const increment = ()=>{
//         dispatch({type : 'increment'});
//     }
//     const decrement = ()=>{
//         dispatch ({type : 'decrement'})
//     }

//     return(
//         <>
//             <button onClick={increment}>+</button>
//             <span>{state.count}</span>
//             <button onClick={decrement}>-</button>
//         </>
//     )
// };

// export default UseReducer;

                                    /* name chaning */

// import React,{useReducer,useState} from "react";

// const reducer = (state,action)=>{
//     // switch(action.type){
//     //     case 'increment' :
//     //         return{count : state.count = "faisal"}
//     //     case 'decrement' :
//     //         return{count : state.count = "faizy"}
//     //     default :
//     //         return state
//     // }

//     if(action.type == "increment"){
//         return {count : state.count = "faizy"}
//     }
//     if(action.type == "decrement"){
//         return {count : state.count = "faisal"}
//     }
    
// }

// const Namec = ()=>{
//     const [state ,dispatch]= useReducer(reducer,{count : "name"})
//     // const [count,setCount]= useState(0);
//     const increment = ()=>{
//         dispatch({type : 'increment'});
//     }
//     const decrement = ()=>{
//         dispatch ({type : 'decrement'})
//     }

//     return(
//         <>
//             <button onClick={increment}>+</button>
//             <span>{state.count}</span>
//             <button onClick={decrement}>-</button>
//         </>
//     )
// };

// export default Namec;


                                /*another method*/ 

import React, { useReducer } from 'react'

const Another = () => {

    const reducer = (state,action)=>{
        switch(action.type){
            case 'increment' :
                return {count : state.count +1}
            case 'decrement' :
                return {count : state.count -1}
            case 'increment5' :
                return {count : state.count +5}
            case 'decrement5' :
                return {count : state.count -5}
            case 'nothing' :
                return initialvalue;
            default :
                return state;
        }
    }

    const initialvalue = {
        count : 0
    };

    const increment = ()=>{
        dispatch({type : 'increment', value : 1})
    } 
    const decrement = ()=>{
        dispatch({type : 'decrement', value : 1})
    }
    const increment5 = ()=>{
        dispatch({type : 'increment5', value : 5})
    }
    const decrement5 = ()=>{
        dispatch({type : 'decrement5', value : 5})
    }
    const reset = ()=>{
        dispatch({type : 'nothing'})
    }

    const [state,dispatch]= useReducer(reducer,initialvalue)
    return (
    <>
        <h1>useReducer</h1>
        <div>
            {state.count}
        </div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        <div>
            <button onClick={increment5}>increment5</button>
            <button onClick={decrement5}>decrement5</button>
        </div>
        <button onClick={reset}>reset</button>
    </>
)
}

export default Another;
