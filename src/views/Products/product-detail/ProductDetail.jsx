import {useParams} from "react-router-dom"

export const  ProductDetail = (props) => {
    const {productId} = useParams()
    const { products } = props;
    const product = products.find(prod => prod.id === productId)
    
    const { id, brand, model, price, imgUrl } = product;

    const isSoldOut = price > 0 ? `$ ${price}` : "Sold Out";

    return (
        <section className="product-detail">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1 className="title is-1">{ model }</h1>
                        <h2 className="subtitle is-2">{ brand }</h2>
                        <figure className="product-detail__image">
                            <img src={imgUrl} alt={id} />
                        </figure>
                    </div>
                    <div className="column">
                        <div className="product-detail__description">
                            <h2 className="title is-2">Description:</h2>
                            <h3 className="title is-3">{isSoldOut}</h3>
                            <ul>
                                <li>ID: { id }</li>
                                <li>Brand: { brand }</li>
                                <li>Model: { model }</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};