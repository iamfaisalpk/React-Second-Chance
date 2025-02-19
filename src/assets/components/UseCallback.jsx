import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Buttons from './Buttons'

const UseClabback = () => {
    const [count,setCount]= useState(0)
    const [state,setstate] = useState (5)

    
    const Plus = useCallback(()=>{
        setCount(count + 1)
    },[count]); 
    const Plus2 = useCallback (()=>{
        setstate(state + 1)
    },[state]); 
return (
    <>
        <Title/><br/>
        <Count text="count" Count={count}/>
        <Buttons handleClick={Plus}>Increment 1</Buttons>
        <Count text="count2" Count={state}/>
        <Buttons handleClick={Plus2}>Increment 2</Buttons>
    </>
)
}

export default React.memo(UseClabback);


                            /* simple callback */ 

// import React, { useState, useCallback } from 'react';

// const MyComponent = ()=> {
// const [count, setCount] = useState(0);

//   // ഈ ഫംഗ്ഷൻ മെമ്മറൈസ് ചെയ്യപ്പെടുന്നു
// const increment = useCallback(() => {
//     setCount(prevCount => prevCount + 1);
//         }, []); // ഡിപെൻഡൻസികൾ ഇല്ല, അതിനാൽ ഈ ഫംഗ്ഷൻ ഒരിക്കൽ മാത്രമേ ക്രിയേറ്റ് ചെയ്യൂ

// return (
//     <div>
//     <p>Count: {count}</p>
//     <button onClick={increment}>Increment</button>
//     </div>
// );
// };

// export default MyComponent;