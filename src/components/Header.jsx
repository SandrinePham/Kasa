import Navbar from './NavBar';
import './Header.scss'; 

function Header() {
  return (
    <header className="header">
      <div className="header-image-container">
        <img
          src="../public/logo.svg"
          alt="Logo de Kasa"
          className="header-logo"
        />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
