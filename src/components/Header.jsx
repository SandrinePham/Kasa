import Navbar from "./NavBar";
import "./header.scss";
import logo from "../assets/logo/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-image-container">
        <img src={logo} alt="Logo de Kasa" className="header-logo" />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
