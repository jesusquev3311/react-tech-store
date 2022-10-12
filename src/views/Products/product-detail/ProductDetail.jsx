import "./ProductDetail.scss"
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import * as ProductService from "../../../Services/products";
import { Features } from "../../../components/Features/Features";
import { Actions } from "../../../components/Actions/Actions";

export const  ProductDetail = () => {
    const [product, updateProduct] = useState([]);

    const {productId} = useParams()

    const productProvider = async () => {
        const data = await ProductService.getOne(productId)
            .then(resp => resp.json())
            .then(items => updateProduct({
                ...items,
                colorCode: items.colorCode || items.options.colors[0].code,
                storageCode: items.storageCode || items.options.storages[0].code,
            }));
    
        return data;
    };

    const addToCartHandler =  ({target}) =>{
        const {name, value} = target;

        if (name !== "submit") {
            updateProduct((prev) => {
                return {
                    ...prev,
                    [name]: value
                }
            });
            console.log(product.storageCode)
            return
        }

        const {id, colorCode, storageCode} = product;

        return ProductService.addToCart({
            id,
            colorCode,
            storageCode
        });
    }
    
    
    useEffect(() => {
        if ( product.length === 0) {
            productProvider()
        }
    });

    const { id, brand, model, price, imgUrl, options } = product;

    const isSoldOut = price > 0 ? `$ ${price}` : "Sold Out";

    return (
        <section className="product-detail">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <figure className="product-detail__image">
                            <img src={imgUrl} alt={id} />
                        </figure>
                    </div>
                    <div className="column">
                        <div className="product-detail__description info">
                            <h1 className="title is-1">{ model }</h1>
                            <h2 className="subtitle is-2">{ brand }</h2>
                            <h3 className="title is-3 price">{isSoldOut}</h3>
                            <h4 className="title is-4">Description:</h4>
                            < Features product={product}/>
                        </div>

                        <div className="product-detail__actions info">
                            <h4 className="title is-4">Actions:</h4>
                            <Actions items={options} addToCartHandler={addToCartHandler}></Actions>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};