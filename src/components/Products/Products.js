import { useEffect, useState } from "react";
import { Product } from "./Product";

const baseUrl = './data';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setProducts(data.result);
            })
    }, []);

    return (
        <>
            <h2>These are all the products we create for you.</h2>
            <ul>
                {products.map(x => <Product key={x.url} {...x} /> )}
            </ul>
        </>
    );
}

export default Products;