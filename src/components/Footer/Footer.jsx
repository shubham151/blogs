import CompanySection from "./CompanySection";
import LinkColumn from "./LinkColumn";
import NewsletterSection from "./NewsletterSection";
import styles from "./Footer.module.css";
import { FOOTER_DATA } from "./FooterConstants";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className={`row mb-5 pb-4 ${styles.footerContent}`}>
              {/* Company Section */}
              <div className="col-12 col-lg-3 order-2 order-lg-1 mb-4 mb-lg-0">
                <CompanySection
                  company={FOOTER_DATA.company}
                  socialLinks={FOOTER_DATA.social}
                />
              </div>

              {/* Link Columns */}
              <div className="col-12 col-lg-9 order-1 order-lg-2">
                <div className="row">
                  {Object.entries(FOOTER_DATA.columns).map(([key, data]) => (
                    <LinkColumn key={key} data={data} columnKey={key} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsletterSection
        newsletter={FOOTER_DATA.newsletter}
        legal={FOOTER_DATA.legal}
        copyright={FOOTER_DATA.company.copyright}
      />
    </footer>
  );
};

export default Footer;
