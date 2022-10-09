import "./Header.scss"

export const Header = ()=>{
    return (
        <header className="App-header">
            <nav className="navbar container" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
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

                    <a href="/" className="navbar-item">
                        Documentation
                    </a>
                    </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a  href="/" className="button ">
                                <strong>Sign up</strong>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};