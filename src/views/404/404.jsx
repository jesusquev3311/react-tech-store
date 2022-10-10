import { useRouteError } from "react-router-dom";
import "./404.scss";

export const  ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
            <div id="error-page" className="error-page container">
                <h1 className="title is-1">Oops!</h1>
                <i class="fas fa-bomb"></i>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
    );
}