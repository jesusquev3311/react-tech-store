import './index.scss';
import "https://kit.fontawesome.com/b4f25d7001.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorPage } from "./views/404/404";
import { Products } from './views/Products/Produtcs';
import { ProductDetail } from './views/Products/product-detail/ProductDetail';
import * as ProductsServices from "./Services/products";

const products = ProductsServices.getAll();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Products products={products}></Products>
      },
      {
        path: "/products/:productId",
        element: <ProductDetail products={products}></ProductDetail>
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
