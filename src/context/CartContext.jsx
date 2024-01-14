import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!inCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error("El producto fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([]);
    }

    const inCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}