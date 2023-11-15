import CartWidget from "./CartWidget";

import { TbPlayFootball } from "react-icons/tb"

function NavBar() {

    return (

        <section className="conteiner hero is-black">
            <div className="columns hero-body">

                <div className="column is-4">
                    <brand className="title">FANATICO FUTBOLERO <TbPlayFootball size="1.5rem" /></brand>
                </div>

                <div className="column is-7">
                    <nav>
                        <ul className="columns">
                            <li className="column is-2">
                                <a className="button is-fullwidth is-white is-outlined" href="www.google.com">Bienvenidos</a>
                            </li>
                            <li className="column is-2">
                                <a className="button is-fullwidth is-white is-outlined" href="www.google.com">Catalogo</a>
                            </li>
                            <li className="column is-2">
                                <a className="button is-fullwidth is-white is-outlined" href="www.google.com">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="column is-1">
                    <CartWidget />
                </div>
            </div>
        </section>
    )
}

export default NavBar;