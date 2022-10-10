import { ProductList } from "../../components/products-list/ProductList";
import "./Products.scss";

export const Products = (props) =>{
    const { products } = props;
    return (
        <section className="products">
            < div className="container">
                <h1 className="title is-1">Popular Item Store</h1>

                <ProductList products={products}></ProductList>
            </div>
        </section>
    );
}