import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout"

import "./App.css"

import ProductDetail from "./pages/ProductDetail";
import Inicio from "./pages/Inicio";
import Category from "./pages/Category";

function App() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Inicio />} />
                    <Route path="/category/:categoryId" element={<Category />} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                    <Route path="*" element={'404 not found'} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App;