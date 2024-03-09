// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCatalogue from './components/ProductCatalogue';
import ProductDetails from './components/ProductDetails';
import Layout from './components/Layout';
import data from './components/data';

const App = () => {
  return (
    <BrowserRouter>
     <Layout/>
    <Routes>
         <Route path="/" element={<ProductCatalogue products={data} /> }/>
        <Route path="/details" element={<ProductDetails />} />
    
    </Routes>
  </BrowserRouter>
  );
};

export default App;
