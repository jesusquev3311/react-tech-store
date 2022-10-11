import "./search.scss";

export const Search = (props) =>{

    return (
        <div className="search field">
            <p className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="Search products..."  onChange={props.onSearch}/>
                <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
                </span>
            </p>
    </div>
    );
};