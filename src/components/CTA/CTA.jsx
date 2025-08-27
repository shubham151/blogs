import Button from "../Button/Button";
import arrowRight from "../../assets/arrow-right.svg";
import styles from "./CTA.module.css";

const CTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className={`${styles.ctaContent} text-center`}>
              {/* Main Heading */}
              <div className={`${styles.headingGroup} mb-4`}>
                <h2 className={styles.mainTitle}>
                  <span className={styles.darkText}>Sorem ipsum</span>
                  <br />
                  <span className={styles.lightText}>dolor sit</span>
                </h2>
                <div className={`${styles.titleUnderline} mx-auto`}></div>
              </div>

              {/* Subtitle */}
              <h3 className={`${styles.subtitle} mb-4`}>
                Rorem ipsum dolor sit amet consectetur
              </h3>

              {/* Description */}
              <div className="row justify-content-center mb-5">
                <div className="col-12 col-md-10 col-lg-9">
                  <p className={styles.description}>
                    Horem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className={`${styles.ctaButtons} d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4`}
              >
                <Button
                  variant="primary"
                  size="lg"
                  className={styles.primaryButton}
                  to="/book-discovery-call"
                >
                  Book A Discovery Call
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  className={styles.secondaryButton}
                  endIcon={
                    <img
                      src={arrowRight}
                      alt="arrow"
                      width="16"
                      height="16"
                      className={styles.arrowIcon}
                    />
                  }
                >
                  Try for free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
