import "./ProductItem.scss";

export const ProductItem = (props) => {
    const { id, brand, model, price, imgUrl } = props.product;

    const isSoldOut = price > 0 ? `$ ${price}` : "Sold Out";

    return (
        <div className="column is-3">
            <div className="product-item card">
                <a href={`products/${id}`}>

                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={imgUrl} alt={`product id ${id}` } />
                        </figure>
                    </div>

                    <div className="media-content">
                        <p className="title is-4">{  model }</p>
                        <p className="subtitle is-6">{ brand }</p>
                    </div>

                    <div className="card-content">
                        <div className="content">
                            <p className="price"> { isSoldOut }</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};