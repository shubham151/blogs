import { Link } from "react-router-dom";
import arrowDown from "../../assets/arrow-down.svg";
import styles from "./Header.module.css";
import { HeaderConstant } from "./HeaderConstant";

const NavigationMenu = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
      {HeaderConstant.NavigationItems.map((item, index) => (
        <li key={index} className="nav-item">
          <Link to={item.href} className={`nav-link ${styles.navLink}`}>
            {item.label}
            {item.hasDropdown && (
              <img
                src={arrowDown}
                alt="dropdown"
                className={`ms-2 ${styles.dropdownIcon}`}
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
