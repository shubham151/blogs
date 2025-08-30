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
      <div className="container-fluid pt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="row align-items-center">
              {/* Newsletter Text + Form (stacked) */}
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <p className={styles.newsletterText}>{newsletter.text}</p>
                <form
                  className={styles.newsletterForm}
                  onSubmit={handleEmailSubmit}
                >
                  <div className="d-flex flex-row flex-sm-row mt-2">
                    <input
                      type="email"
                      placeholder={newsletter.placeholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={` form-control ${styles.emailInput}`}
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

              {/* Legal Links + Copyright */}
              <div className="col-12 col-md-6 text-center text-md-end">
                <div
                  className={`${styles.legalLinks} d-flex flex-wrap justify-content-center justify-content-md-end gap-3`}
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
                </div>
                <div className={`${styles.copyright} mt-2`}>{copyright}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
