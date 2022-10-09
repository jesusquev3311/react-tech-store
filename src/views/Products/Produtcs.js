import { ProductList } from "../../components/products-list/ProductList";
import * as ProductsServices from "../../Services/products";
import "./Products.scss";

export const Products = () =>{
    const products = ProductsServices.getALL();

    return (
        <section className="products">
            < div className="container">
                <h1 className="title is-1">Popupal Item Store</h1>

                <ProductList products={products}></ProductList>
            </div>
        </section>
    );
}