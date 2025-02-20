import React from 'react'
import { useParams } from 'react-router-dom';

const Difining = () => {
    const prod = useParams()
return (
    <>
        <h1>Product Details</h1>
        <span>{prod.productid}</span>
    </>
)
}

export default Difining;
