import "./footer.scss";
import logoWhithe from "../assets/logo/logo_white.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logoWhithe} alt="Logo de Kasa" className="footer-logo" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
