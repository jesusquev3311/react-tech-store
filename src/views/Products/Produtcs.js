import { Search } from "../../components/search/Search";
import "./Products.scss";

export const Products = () =>{
    return (
        <section className="products">
        < div className="container">
            <h1 className="title is-1">Popupal Item Store</h1>
            <Search></Search>
        </div>
        </section>
    );
}