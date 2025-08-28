import Button from "../Button/Button";
import arrowRight from "../../assets/arrow-right.svg";
import styles from "./MarketingSection.module.css";

const TabContent = ({ content }) => {
  const { image, imageAlt, title, description, bulletPoints, actions } =
    content;

  return (
    <div className={`${styles.contentCard} p-4 p-lg-5`}>
      <div className="row align-items-center g-4 g-lg-5">
        {/* Image Section */}
        <div className="col-12 col-lg-6 order-1 order-lg-1">
          <div className={`${styles.chartSection} text-center`}>
            <img
              src={image}
              alt={imageAlt}
              className={`${styles.chartImage} img-fluid`}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="col-12 col-lg-6 order-2 order-lg-2">
          <div className={styles.textSection}>
            <h3 className={`${styles.contentTitle} mb-4`}>{title}</h3>

            <p className={`${styles.contentDescription} mb-4`}>{description}</p>

            <div className={`${styles.bulletPoints} mb-4`}>
              {bulletPoints.map((point, index) => (
                <p key={index} className={styles.bulletPoint}>
                  {point}
                </p>
              ))}
            </div>

            <div
              className={`${styles.actions} d-flex flex-column flex-sm-row gap-3 align-items-center align-items-sm-start`}
            >
              <Button
                variant="primary"
                className={styles.primaryBtn}
                to={actions.primary.to}
              >
                {actions.primary.text}
              </Button>

              <Button
                variant="secondary"
                className={styles.secondaryBtn}
                to={actions.secondary.to}
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
                {actions.secondary.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
