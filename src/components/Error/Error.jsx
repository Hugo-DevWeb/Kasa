import { Link } from "react-router-dom";
import "../../assets/font.scss";
function Error() {
    return(
        <div id="error">
            <h1 id="error__title">404</h1>
            <p className="error__content">Oups! La page que vous demandez n'existe pas.</p>
            <p className="error__content"><Link to="/">Retourner à la page d'accueil</Link></p>
        </div>
    )
}

export default Error;