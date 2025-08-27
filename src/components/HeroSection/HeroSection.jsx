import Button from "../Button/Button";
import polygonLines from "../../assets/polygon-lines.svg";
import arrowRight from "../../assets/arrow-right.svg";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={`${styles.heroSection} d-flex align-items-center`}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Background polygons */}
            <div className={styles.backgroundDecor}>
              <img
                src={polygonLines}
                alt=""
                className={`${styles.polygonLines} ${styles.leftSide} d-none d-lg-block`}
              />
              <img
                src={polygonLines}
                alt=""
                className={`${styles.polygonLines} ${styles.rightSide} d-none d-lg-block`}
              />
            </div>

            <div className={`${styles.heroContent} text-center`}>
              {/* Hero Title */}
              <h1 className={`${styles.heroTitle} mb-3`}>
                Horem ipsum dolor sit amet{" "}
                <span className={styles.highlight}>amet</span>{" "}
                <span className={styles.highlight}>consectetur.</span>
              </h1>

              {/* underline */}
              <div className={`${styles.underline} mx-auto`}></div>

              {/* Hero Subtitle */}
              <h2 className={`${styles.heroSubtitle} mb-5`}>
                Sorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>

              {/* Hero Description */}
              <div className="row justify-content-center mb-5">
                <div className="col-12 col-md-10 col-lg-12">
                  <p className={styles.heroDescription}>
                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                  </p>
                </div>
              </div>

              {/* Hero Actions */}
              <div
                className={`${styles.heroActions} d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3`}
              >
                <Button
                  variant="primary"
                  size="lg"
                  className={styles.primaryBtn}
                  to="/book-discovery-call"
                >
                  Book A Discovery Call
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  className={styles.secondaryBtn}
                  endIcon={
                    <img
                      src={arrowRight}
                      alt="arrow"
                      width="32"
                      height="32"
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

export default HeroSection;
