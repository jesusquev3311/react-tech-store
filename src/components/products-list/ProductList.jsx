import { ProductItem } from "../product-item/ProductItem";
import { Search } from "../search/Search";
import "./ProductList.scss";

export const ProductList = (props) => {
    const { products } = props;

    const productsList = products.map(product => <ProductItem  key={product.id} product={product} />);

    return (
        <div className="product-list">
            <Search></Search>
            <div className="columns is-multiline" >
                { productsList }
            </div>
        </div>
    );
}