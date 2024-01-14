import './ItemDetail.css'

import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

function ItemDetail({ id, name, img, description, price, stock }) {

    const [quantityAdd, setQuantityAdd] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleAdd = (quantity) => {
        setQuantityAdd(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <div className='item-detail'>
            <article className="item-detail-conteiner" key={id}>
                <img className="item-detail-img" src={img} alt={name} />
                <section className="item-detail-section">
                    <h2 className="item-detail-name">{name}</h2>
                    <p className="item-detail-description">{description}</p>
                    <p className="item-detail-price">${price}</p>
                    <p className="item-detail-stock">Stock: <strong>{stock}</strong></p>
                    {
                        quantityAdd > 0 ? (
                            <div className='cart-finish-container'>
                                <Link className="cart-finish" to="/cart">Terminar compra</Link>
                                <Link className="cart-finish" to="/">Seguir comprando</Link>
                            </div>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
                        )
                    }
                </section>
            </article>
            <Link to="/" className="button-back">Volver</Link>
        </div>

    )
}

export default ItemDetail;