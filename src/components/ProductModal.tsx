import { IProduct} from "./Product"

interface ProductModalProps {
    product: IProduct,
    onClose: ()=>void
}

export default function ProductModal(props: ProductModalProps) {

    return (
        <div className="modalContainer">
            <div className="modal">
                <img src={props.product.image} alt={props.product.title} />
                <p>{props.product.title}</p>
                <p><b>${props.product.price}</b></p>
                <p>{props.product.description}</p>
                <h1 className="closeModal" onClick={props.onClose}>X</h1>
            </div>
        </div>
    )
}