import { Link } from "react-router-dom";
import "../Item/Item.css";

function Item(props) {

    const { id, name, img, price, stock } = props;

    return (

        <article key={id} className="item-card">
            <picture>
                <img className="item-image" src={img} alt={name} />
            </picture>
            <section className="item-details">
                <h2 className="item-name"><strong>{name}</strong></h2>
                <p className="item-price">Precio: <strong>${price}</strong></p>
                <p className="item-stock">Stock disponible: <strong>{stock}</strong></p>
                <Link to={`/product/${id}`} className="item-details-button">Ver detalles</Link>
            </section>
        </article>

    )

}

export default Item;