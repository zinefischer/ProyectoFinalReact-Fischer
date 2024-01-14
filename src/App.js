import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout"

import "./App.css"

import ProductDetail from "./pages/ProductDetail";
import Inicio from "./pages/Inicio";
import Category from "./pages/Category";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

import { CartProvider } from "./context/CartContext";

function App() {

    return (

        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Inicio />} />
                        <Route path="/category/:categoryId" element={<Category />} />
                        <Route path="/product/:productId" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={'404 not found'} />
                    </Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>

    )
}

export default App;