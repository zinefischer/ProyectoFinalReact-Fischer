import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../service/firestore/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Timestamp, collection, writeBatch, getDocs, query, where, documentId, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

import '../CheckoutForm/CheckoutForm.css'

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, clearCart } = useContext(CartContext);

    const createOrder = async ({ userName, userPhone, userEmail, userDirection }) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: {
                    userName, userPhone, userEmail, userDirection
                },
                items: cart,
                // total: totalPrice,
                date: Timestamp.fromDate(new Date()),
            };

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromfirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

            const { docs } = productsAddedFromfirestore;
            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, 'orders');

                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('Hay productos que están fuera de stock');
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            // orderId = true
        }
    };

    if (loading) {
        return (
            <div className="checkout-container">

                <h1>Se está generando su orden</h1>;
            </div>
        )
    }

    if (orderId) {

        clearCart();

        return (
            <div className="checkout-container">
                <h1>El ID de su orden es: {orderId}</h1>;
                <h2>¡Muchas gracias por su compra!</h2>
                <Link to='/' className="products-button">Volver a la tienda</Link>
            </div>
        )
    }

    return (
        <div className="checkout-container">
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
}

export default Checkout;