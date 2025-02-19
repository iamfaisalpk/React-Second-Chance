import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count,setCount]= useState(0);
    const [state,setState] = useState(0)

    const Plused = ()=>{
        setCount(count + 1)
    }
    const Plused2 = ()=>{
        setState(state + 1)
    }
    const EvenOrOdd = useMemo(()=>{
        let i = 0;
        while (i < 300000) i ++;
        return count%2 === 0
    },[count]);

return (
    <>
        <button onClick={Plused}>count : {count}</button><br />
        <span>{EvenOrOdd ? `even` : `odd`}</span><br /><br />
        <button onClick={Plused2}>state : {state}</button><br /><br />
    </>
)
}

export default UseMemo
