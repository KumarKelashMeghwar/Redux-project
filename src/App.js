import Header from "./pages/Header/Header";

import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import React from "react";

import Component from "./pages/Boxx/Component";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/hello" element={<Component />} />
      </Routes>
    </>
  );
}

export default App;
