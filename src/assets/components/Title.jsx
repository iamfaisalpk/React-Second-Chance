import React from 'react'

const Title = () => {
    console.log("rendering title")
return (
    <>
    <h1>UseCallback</h1>
    </>
)
}

export default React.memo(Title);