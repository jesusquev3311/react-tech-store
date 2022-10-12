import './App.scss';
import { useEffect, useState } from 'react';
import { Header } from "./components/header/Header";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ErrorPage } from "./views/404/404";
import { Products } from './views/Products/Produtcs';
import { ProductDetail } from './views/Products/product-detail/ProductDetail';
import * as ProductService from "./Services/products";

function App() {
  const [products, updateProducts] = useState([]);
 
  const porductsProvider = async () => {
    const data = await ProductService.getAll()
      .then(resp => resp.json())
      .then(items => updateProducts(items));

      return data;
  };

  let cart = [];


  useEffect(() => {
      porductsProvider()
  }, []);

  return (
    <div className="App">
      <Header cart={cart}></Header>
      <BrowserRouter >
        <Routes>
              <Route path='/'    element={<Products products={products} />} errorElement={<ErrorPage />} />
              <Route path='/products/:productId'    element={<ProductDetail  />} errorElement={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
