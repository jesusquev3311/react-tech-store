import "./Actions.scss";

export const Actions = (props) => {
    const { items } = props;

    const colors = items?.colors.map(color => (<option>{color.name}</option>))
    const storages = items?.storages.map(storage => (<option>{storage.name}</option>))

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
                                    <select name="storages">
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
                                        <select name="colors">
                                            { colors}
                                        </select>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button className="button is-danger is-large" onClick= { props.addToCartHandler } >Add to cart</button>
                    </div>
                </div>
            </form>
        </div>
    );
};