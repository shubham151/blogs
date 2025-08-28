import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  // Footer links data
  const footerData = {
    solutions: {
      title: "Solutions",
      links: [
        { label: "Yorem", href: "/yorem" },
        { label: "Vorem", href: "/vorem" },
        { label: "Corem", href: "/corem" },
        { label: "Sorem", href: "/sorem" },
        { label: "Norem", href: "/norem" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "Jorem", href: "/jorem" },
        { label: "Lorem", href: "/lorem" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { label: "Vorem", href: "/vorem-resources" },
        { label: "Borem", href: "/borem" },
        { label: "Yorem", href: "/yorem-resources" },
        { label: "Horem", href: "/horem" },
        { label: "Norem", href: "/norem-resources" },
      ],
    },
    insights: {
      title: "Insight",
      links: [
        { label: "Jorem", href: "/jorem-insights" },
        { label: "Morem", href: "/morem" },
        { label: "Forem", href: "/forem" },
        { label: "Jorem", href: "/jorem-alt" },
        { label: "Corem", href: "/corem-insights" },
      ],
    },
  };

  // Social media links
  const socialLinks = [
    { platform: "Facebook", href: "#", icon: "F" },
    { platform: "LinkedIn", href: "#", icon: "in" },
    { platform: "Twitter", href: "#", icon: "X" },
  ];

  // Handle email subscription
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  // Render social icon
  const renderSocialIcon = (social) => (
    <a
      key={social.platform}
      href={social.href}
      className={styles.socialLink}
      aria-label={social.platform}
    >
      <span className={styles.socialIcon}>{social.icon}</span>
    </a>
  );

  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="row mb-5 pb-4">
              {/* Logo and Company Info */}
              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className={styles.companySection}>
                  <div className={styles.footerLogo}>
                    <img
                      src={logo}
                      alt="Company Logo"
                      className={styles.logoImage}
                    />
                  </div>

                  <p className={styles.companyDescription}>
                    Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <div className={styles.socialLinks}>
                    {socialLinks.map(renderSocialIcon)}
                  </div>
                </div>
              </div>

              {/* Footer Links Columns - Direct grid layout */}
              {Object.entries(footerData).map(([key, data]) => (
                <div key={key} className="col-6 col-md-3 col-lg-2 mb-4 mb-lg-0">
                  <h3 className={styles.columnTitle}>{data.title}</h3>
                  <ul className={styles.linkList}>
                    {data.links.map((link, index) => (
                      <li key={index} className={styles.linkItem}>
                        <Link to={link.href} className={styles.footerLink}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section - Full Width */}
      <div className={styles.newsletterSection}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="row align-items-center">
                {/* Newsletter Text */}
                <div className="col-12 col-md-3 mb-3 mb-md-0">
                  <p className={styles.newsletterText}>
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                {/* Newsletter Form */}
                <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex justify-content-center">
                  <form
                    className={styles.newsletterForm}
                    onSubmit={handleEmailSubmit}
                  >
                    <div className="d-flex">
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.emailInput}
                        required
                      />
                      <Button
                        variant="primary"
                        className={styles.submitButton}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Legal Links */}
                <div className="col-12 col-md-3">
                  <div
                    className={`${styles.legalLinks} d-flex flex-wrap justify-content-md-end justify-content-center gap-2`}
                  >
                    <Link to="/privacy" className={styles.legalLink}>
                      Privacy Policy
                    </Link>
                    <Link to="/terms" className={styles.legalLink}>
                      Terms of Use
                    </Link>
                    <span
                      className={`${styles.copyright} w-100 text-md-end text-center mt-1`}
                    >
                      Copyright © 2025 Gorem ipsum dolor sit amet elit.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
