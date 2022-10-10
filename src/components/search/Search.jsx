import { useState } from "react";
import "./search.scss";

export const Search = () =>{
    const [query, updateQuery] = useState();

    const onSearch = ({ target }) => {
        const {value} = target;

        updateQuery((prev) => {
            return value;
        });
    };

    return (
        <div className="search field">
            <p className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="Search products..." value={query} onChange={onSearch}/>
                <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
                </span>
            </p>
    </div>
    );
};