import { PiShoppingCartLight } from "react-icons/pi"

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import './CartWidget.css'

function CartWidget() {

    const { totalQuantity } = useContext(CartContext)

    return (

        <Link className="cart-widget" to="/cart" >
            <PiShoppingCartLight size="2rem" />
            <span>{totalQuantity()}</span>
        </Link >
    )
}

export default CartWidget;