import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const Products = [
        {id : "p1" , product: "product1"},
        {id : "p2" , product: "product2"},
        {id : "p3" , product: "product3"},
        {id : "p4" , product: "product4"},
    ]
return (
    <>
    <h1>Welcome Product page</h1>
    <ul>
        {Products.map((prod)=>{
            return <li key={prod.id}>{prod.product}
                <Link to={`/products/${prod.id}`}>{prod.product}</Link>
            </li>
        })}
    </ul>
        
    </>
)
}

export default Products;
