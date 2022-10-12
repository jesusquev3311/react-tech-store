import "./Features.scss";

export const Features = (props) =>{
    const { product } = props;
    const FEATURES = ["cpu", "ram", "os", "displaySize", "battery", "primaryCamera", "secondaryCmera", "dimentions", "weight"];

    const list = Object.entries(product).map(([key, value]) => {
        let item = "";

        if (typeof key === "string" && FEATURES.includes(key)){
            item = <li  key={key}>{`${key}: ${value}`}</li>;
        }
        return item;
    });

    return (
        <ul className="features-list">
            { list }
        </ul>
    )
};