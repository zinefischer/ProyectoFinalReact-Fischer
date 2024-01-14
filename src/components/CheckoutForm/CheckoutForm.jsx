import { useState } from "react";

import Checkout from "../Checkout/Checkout";

import './CheckoutForm.css'

function CheckoutForm({ onConfirm }) {

    const [userName, setUserName] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userDirection, setUserDirection] = useState('')


    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            userName, userPhone, userEmail, userDirection
        }
        onConfirm(userData)
    }

    return (

        <div>
            <div className="checkout-form-container">
                <h1 className="checkout-form-title">Complete los siguientes datos</h1>
                <form className="checkout-form" onSubmit={handleConfirm}>
                    <label>
                        <input
                            className="input"
                            placeholder="Nombre"
                            type="text"
                            required value={userName}
                            onChange={({ target }) => setUserName(target.value)}
                        />
                    </label>
                    <label>
                        <input
                            className="input"
                            placeholder="Telefono"
                            type="text"
                            required value={userPhone}
                            onChange={({ target }) => setUserPhone(target.value)}
                        />
                    </label>
                    <label>
                        <input
                            className="input"
                            placeholder="Correo electronico"
                            type="email"
                            required value={userEmail}
                            onChange={({ target }) => setUserEmail(target.value)}
                        />
                    </label>
                    <label>
                        <input
                            className="input"
                            placeholder="Direccion"
                            type="text"
                            required value={userDirection}
                            onChange={({ target }) => setUserDirection(target.value)}
                        />
                    </label>
                    <div className="button-submit-container">
                        <button className="submit-button" type="submit">Crear orden</button>
                    </div>
                </form>
            </div>
        </div>

    )

}

export default CheckoutForm;