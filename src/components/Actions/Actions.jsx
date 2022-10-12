import "./Actions.scss";

export const Actions = (props) => {
    const { items } = props;

    const colors = items?.colors.map(color => (<option key={color.name} value={color.code}>{color.name}</option>))
    const storages = items?.storages.map(storage => (<option key={storage.name} value={storage.code}>{storage.name}</option>))

    return (
        <div className="actions-form">
            <form action="#">
                <div className="field is-horizontal">
                    <div className="field-label">
                        <label htmlFor="storages" className="label">Storage:</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <div className="select">
                                    <select name="storages" onChange={props.addToCartHandler}>
                                        { storages }
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="field-label">
                                <label htmlFor="colors" className="label">Colors:</label>
                        </div>
                            <div className="field">
                                <div className="control">
                                    <div className="select">
                                        <select name="colors" onChange={props.addToCartHandler}>
                                            { colors}
                                        </select>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button className="button is-danger is-large" onClick= { props.addToCartHandler } type="button" name="submit">Add to cart</button>
                    </div>
                </div>
            </form>
        </div>
    );
};