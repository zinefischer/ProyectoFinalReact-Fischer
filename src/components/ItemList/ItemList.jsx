import Item from "../Item/Item";

import "../Item/Item.css"

function ItemList({ products }) {

    return (

        <div className="item-container">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )

}

export default ItemList;