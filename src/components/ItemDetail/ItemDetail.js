import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { Link } from 'react-router-dom';

function ItemDetail({ id, name, img, description, price, stock }) {

    return (
        <div>
            <article className="item-detail-conteiner" key={id}>
                <picture>
                    <img className="item-detail-img" src={img} alt={name} />
                </picture>
                <section className="item-detail">
                    <h2 className="item-detail-name">{name}</h2>
                    <p className="item-detail-description">{description}</p>
                    <p className="item-detail-price">${price}</p>
                    <p className="item-detail-stock">Stock: <strong>{stock}</strong></p>
                    <ItemCount initial={1} stock={stock} />
                </section>
            </article>
            <Link to="/" className="button-back">Volver</Link>
        </div>

    )
}

export default ItemDetail;