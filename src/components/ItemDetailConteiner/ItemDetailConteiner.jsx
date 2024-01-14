import "./ItemDetailConteiner.css"

import ItemDetail from "../ItemDetail/ItemDetail";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../service/firestore/firestore";

function ItemDetailConteiner() {
    const [product, setProduct] = useState(null)

    const { productId } = useParams();

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId])

    return (
        <div className="detail-conteiner">
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailConteiner;