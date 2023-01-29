/* eslint-disable no-unused-vars */
import logo from "../../assets/images/logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import "../../assets/font.scss";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/About">À propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
