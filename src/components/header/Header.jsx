import "./Header.scss"

export const Header = (props)=>{
    const { cart } = props;

    const productCount = cart.length;
    return (
        <header className="App-header">
            <nav className="navbar container" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28"  alt="logo"/>
                    </a>

                    <a href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <a  href="/" className="navbar-item">
                        Home
                    </a>
                    </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <div className="cart">
                                <span className="count">{productCount}</span>
                                <i class="fas fa-shopping-cart "></i>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};