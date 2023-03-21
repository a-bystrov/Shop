import { useState, useEffect } from "react";
import { Product, IProduct }from "./Product";
 
export default function ProductsPage() {
    const [products, setProducts] = useState<IProduct[]>([])
  
    async function getProducts() {
        let response = await fetch('https://fakestoreapi.com/products')
        let products = await response.json()
        setProducts(products)
    }

    useEffect(()=>{
            getProducts()
    }, [])

    return(
        <>
            { products.map((item)=>{return <Product product={item} key={item.id}/>}) }
        </>
    )
 }