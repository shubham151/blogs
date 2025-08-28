import logo from "../../assets/logo.svg";
import styles from "./Footer.module.css";

const CompanySection = ({ company, socialLinks }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
      <div className={styles.companySection}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="Company Logo" className={styles.logoImage} />
        </div>

        <p className={styles.companyDescription}>{company.description}</p>

        <div className={styles.socialLinks}>
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              className={styles.socialLink}
              aria-label={social.platform}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.socialIcon}>{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
