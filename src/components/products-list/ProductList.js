import { ProductItem } from "../product-item/ProductItem";
import "./ProductList.scss";

export const ProductList = (props) => {
    const { products } = props;

    const productsList = products.map(product => <ProductItem  product={product} />);

    return (
        <div className="product-list">
            <div className="columns is-multiline" >
                { productsList }
            </div>
        </div>
    );
}