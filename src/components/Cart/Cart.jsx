import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import CartItem from "../CartItem/CartItem";

import './Cart.css'

function Cart() {

    const { cart, clearCart, totalPrice, totalQuantity } = useContext(CartContext)

    if (totalQuantity() === 0) {
        return (
            <div className="empty-cart-container">
                <h1 className="empty-cart">El carrito está vacio</h1>
                <Link className="products-button" to="/">Productos</Link>
            </div>
        )
    } else {
        return (
            <div className="cart-container">
                {cart.map(p => <CartItem key={p.id} {...p} />)}
                <div className="cart-total-container">
                    <h3 className="cart-total">Total: $ {totalPrice()}</h3>
                    <button className="cart-button-clear" onClick={() => clearCart()}>Vaciar carrito</button>
                    <Link className="checkout-button" to="/checkout">Checkout</Link>
                </div>
            </div>
        )
    }


}

export default Cart;