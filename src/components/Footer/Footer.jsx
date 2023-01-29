import logo from "../../assets/images/logo.svg";
import "./Footer.scss"; 
import "../../assets/font.scss";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo Kasa" />
      <p>2022 Kasa. All right reserved</p>
    </footer>
  );
}

export default Footer;
