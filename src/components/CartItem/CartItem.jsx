import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import './CartItem.css'

function CartItem({ name, img, price, id, quantity }) {

    const { removeItem } = useContext(CartContext)

    return (

        <div className="item-cart-container">
            <div className="item-cart-name-container">
                <h2 className="item-cart-name">{name}</h2>
            </div>
            <div className="item-cart-quantity-container">
                <p className="item-cart-quantity">Cantidad: {quantity}</p>
            </div>
            <div className="item-cart-subtotal-container">
                <p className="item-cart-subtotal">Subtotal: ${price * quantity}</p>
            </div>
            <div className="item-cart-remove-container">
                <button className="item-cart-remove" onClick={() => removeItem(id)}>X</button>
            </div>
        </div>
    )
}

export default CartItem;

