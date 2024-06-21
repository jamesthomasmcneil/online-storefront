import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ProductList from "./ProductList";
import Product from "./Product";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductForm from "./ProductForm";
import ProductContext from "./ProductContext";
import HomeProducts from "./HomeProducts";
import Filter from "./Filter";

function App() {
  return (

    <Router>
    <Routes>
    <Route path="/" element={<Home />}>
    <Route index element={<HomeProducts />} />
    <Route path="about" element={<About />}/>
    <Route path="filter" element={<Filter />}/>
    <Route path="products" element={<ProductList />} />
    <Route path="products/add" element={<ProductForm />} />
    <Route path="products/:productId/edit" element={<ProductForm />} />
    <Route path="products/:productId" element={<Product />} />
    <Route path="*" element={<h1>Product Not Found</h1>} />
    </Route>
    </Routes>
    </Router>

  );
}

export default App;