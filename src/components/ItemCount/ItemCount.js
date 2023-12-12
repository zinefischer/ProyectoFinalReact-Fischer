import "./ItemCount.css"

import { useState } from "react";

function ItemCount({ stock, initial }) {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const addCart = () => {
        console.log("Añadido al carrito: ", quantity)
    }

    return (

        <div className="counter">
            <div className="counter-conteiner">
                <button className="counter-button" onClick={decrement}>-</button>
                <h4 className="counter-number">{quantity}</h4>
                <button className="counter-button" onClick={increment}>+</button>
            </div>
            <button className="cart-add" onClick={addCart}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount;