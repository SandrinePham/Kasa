import { Link } from "react-router-dom";
import "./banner.scss";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <img
          src="/assets/images/logo/LOGO.svg"
          alt="Logo Kasa"
          className="logo"
        />{" "}
        <nav className="navLinks">
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
        </nav>
      </div>
    </>
  );
};

export default Banner;
