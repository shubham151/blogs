import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../assets/logo.svg";
import arrowDown from "../../assets/arrow-down.svg";
import personBook from "../../assets/person-book.svg";
import styles from "./Header.module.css";

/**
 * Navigation items configuration
 */
const navigationItems = [
  { label: "Solutions", href: "/solutions", hasDropdown: true },
  { label: "Company", href: "/company", hasDropdown: true },
  { label: "Resources", href: "/resources", hasDropdown: true },
  { label: "Learn", href: "/learn", hasDropdown: true },
  { label: "Blogs", href: "/blog", hasDropdown: false },
];

/**
 * Header Component
 */
const Header = () => {
  const renderNavigationItem = (item, index) => (
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
  );

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light sticky-top ${styles.navBar}`}
    >
      <div className="container-fluid container-xl">
        {/* Logo/Brand */}
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
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {navigationItems.map(renderNavigationItem)}
          </ul>

          {/* Action Buttons */}
          <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-3 mt-3 mt-lg-0">
            <Button
              variant="secondary"
              startIcon={
                <img src={personBook} alt="user" width="16" height="16" />
              }
            >
              Client Login
            </Button>

            <Button variant="primary" to="/book-discovery-call" size="lg">
              Book A Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
