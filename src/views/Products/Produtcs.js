import { Search } from "../../components/search/Search";
import { ProductList } from "../../components/products-list/ProductList";
import * as ProductsServices from "../../Services/products";
import "./Products.scss";

export const Products = () =>{
    const products = ProductsServices.getALL();

    console.log("Products: ", products);

    return (
        <section className="products">
            < div className="container">
                <h1 className="title is-1">Popupal Item Store</h1>
                <Search></Search>
                <ProductList products={products}></ProductList>
            </div>
        </section>
    );
}