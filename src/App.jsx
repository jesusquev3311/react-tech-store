import './App.scss';
import { Header } from "./components/header/Header";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ErrorPage } from "./views/404/404";
import { Products } from './views/Products/Produtcs';
import { ProductDetail } from './views/Products/product-detail/ProductDetail';
import DATA from './shared/data.json';

function App() {

  const products = DATA;
 
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter >
        <Routes>
              <Route path='/'    element={<Products products={products} />} errorElement={<ErrorPage />} />
              <Route path='/products/:productId'    element={<ProductDetail products={products} />} errorElement={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
