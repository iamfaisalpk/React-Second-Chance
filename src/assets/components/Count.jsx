import React from 'react'

const Count = ({text, Count}) => {
    console.log(`rendering ${text}`)
return (
    <>
        {text} : {Count}
    </>
)
}

export default React.memo(Count);
