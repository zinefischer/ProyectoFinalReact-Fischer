import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css"

function NavBar() {

    return (
        <div className="header">
            <Link className="brand-link" to="/">
                <h1 className="brand">ReVe</h1>
            </Link>
            <nav className="navbar">
                <NavLink className="link" to={"/category/shoes"}>Shoes</NavLink>
                <NavLink className="link" to={"/category/hoodies"}>Hoodies</NavLink>
                <NavLink className="link" to={"/category/caps"}>Caps</NavLink>
            </nav>
            <figure className="cart-widget" >
                <CartWidget />
            </figure>
        </div>
    )
}

export default NavBar;