import React, { useContext } from 'react'
import { userContext } from './UseContext'

const Component1 = () => {
    const {car,Name} = useContext(userContext)
return (
    <>
        <h1>Object values: {car.name} <br/>{car.year} <br/> {car.color}</h1>
        <h2>name is  : {Name}</h2>
    </>
)
}

export default Component1;
