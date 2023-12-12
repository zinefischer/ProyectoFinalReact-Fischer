import "./ItemDetailConteiner.css"

import ItemDetail from "../ItemDetail/ItemDetail";

import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";

function ItemDetailConteiner() {

    const { productId } = useParams();

    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductsById(productId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [productId])

    return (
        <div className="detail-conteiner">
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailConteiner;