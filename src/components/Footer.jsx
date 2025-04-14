import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img
          src="../public/logo_white.svg"
          alt="Logo de Kasa"
          className="footer-logo"
        />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
