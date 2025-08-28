import CTAHeading from "./CTAHeading";
import CTAButtons from "./CTAButtons";
import styles from "./CTA.module.css";
import { CTA_CONTENT } from "./CTAConstants";

const CTASection = ({ content = CTA_CONTENT }) => {
  return (
    <section className={styles.ctaSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className={`${styles.ctaContent} text-center`}>
              <CTAHeading
                heading={content.heading}
                subtitle={content.subtitle}
              />

              {/* Description */}
              <div className="row justify-content-center mb-5">
                <div className="col-12 col-md-10 col-lg-9">
                  <p className={styles.description}>{content.description}</p>
                </div>
              </div>

              <CTAButtons buttons={content.buttons} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
