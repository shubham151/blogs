import { Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import HeaderActions from "./HeaderActions";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light sticky-top ${styles.navBar}`}
    >
      <div className="container-fluid container-xl">
        {/* Logo */}
        <Link to="/" className={`navbar-brand ${styles.brand}`}>
          <img
            src={logo}
            alt="Company Logo"
            height="36"
            className={`d-inline-block align-top ${styles.logo}`}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0 p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <NavigationMenu />
          <HeaderActions />
        </div>
      </div>
    </nav>
  );
};

export default Header;
