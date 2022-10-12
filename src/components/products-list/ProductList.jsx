import "./ProductList.scss";
import { useState, useEffect } from "react";
import { ProductItem } from "../product-item/ProductItem";
import { Search } from "../search/Search";

export const ProductList = (props) => {
    const { products } = props;
    const [productItems, SetProductsItems] = useState(products);

    const searchHandler = ({target: { value}}) => {

        if (value) {
            let searchAcc = products;

            const result = searchAcc.filter(({brand, model}) => {

                return brand.toLowerCase().includes(value) || model.toLowerCase().includes(value);
            });

            if (result.length) {
                SetProductsItems(result);
            }

        } else {
            SetProductsItems(products);
        }
    }

    useEffect(() =>{
        if(productItems.length === 0) {
            SetProductsItems(products)
        }
    }, [products, productItems]);

    const productsList = productItems.map(product => <ProductItem  key={product.id} product={product} />);

    return (
        <div className="product-list">
            <Search onSearch={searchHandler}></Search>
            <div className="columns is-multiline" >
                { productsList }
            </div>
        </div>
    );
}