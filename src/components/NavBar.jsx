import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
        end
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        À Propos
      </NavLink>
    </nav>
  );
}

export default Navbar;
