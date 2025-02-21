import { Link } from "react-router-dom";

const Products = ()=>{
    const Products = [
        {id : "a1", product : "products1"},
        {id : "a2", product : "products2"},
        {id : "a3", product : "products3"},
        {id : "a4", product : "products4"},
    ];

    return(
        <>
            <h1>Welcome to Product page</h1>
            <ul>
                {Products .map((prod)=>{
                    return <li key={prod.id}>{prod.product}
                    <Link to={`/products/${prod.id}`}>{prod.product}</Link>
                    </li>
                })}
            </ul>
        </>
    )
};

export default Products;