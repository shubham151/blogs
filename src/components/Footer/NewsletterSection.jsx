import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Footer.module.css";

const NewsletterSection = ({ newsletter, legal, copyright }) => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className={styles.newsletterSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="row align-items-center">
              {/* Newsletter Text */}
              <div className="col-12 col-md-3 mb-3 mb-md-0">
                <p className={styles.newsletterText}>{newsletter.text}</p>
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
                      placeholder={newsletter.placeholder}
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
                      {newsletter.submitText}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Legal Links */}
              <div className="col-12 col-md-3">
                <div
                  className={`${styles.legalLinks} d-flex flex-wrap justify-content-md-end justify-content-center gap-2`}
                >
                  {legal.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className={styles.legalLink}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <span
                    className={`${styles.copyright} w-100 text-md-end text-center mt-1`}
                  >
                    {copyright}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
