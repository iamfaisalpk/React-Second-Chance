import React, { useContext, useState } from 'react'
import { userContext } from './UseContext'

const Component3 = () => {
    const {count,setCount} = useContext(userContext)
return (
    <div>
        <h1>count value  Component3 : {count}</h1>
    </div>
)
}

export default Component3
