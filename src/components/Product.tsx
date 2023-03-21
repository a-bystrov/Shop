import { useState } from "react";
import ProductModal from "./ProductModal";

export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export interface ProductProps {
    product: IProduct
}

export function Product(props: ProductProps) {
    const [modal, setModal] = useState(false)

    return (
        <article className="product">
                <img src={props.product.image} alt={props.product.title}></img>
            <div>
                <p>{props.product.title}</p>
                <p><b>${props.product.price}</b></p>
            </div>
            <button onClick={()=>{setModal(!modal)}}>More detailes</button>
            {modal && <ProductModal product={props.product} onClose={()=>setModal(false)}/>}
        </article>
    )
}