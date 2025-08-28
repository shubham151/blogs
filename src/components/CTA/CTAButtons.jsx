import Button from "../Button/Button";
import arrowRight from "../../assets/arrow-right.svg";
import styles from "./CTA.module.css";

const CTAButtons = ({ buttons }) => {
  return (
    <div
      className={`${styles.ctaButtons} d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4`}
    >
      <Button
        variant="primary"
        size="lg"
        className={styles.primaryButton}
        to={buttons.primary.to}
      >
        {buttons.primary.text}
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className={styles.secondaryButton}
        to={buttons.secondary.to}
        endIcon={
          buttons.secondary.hasArrow ? (
            <img
              src={arrowRight}
              alt="arrow"
              width="16"
              height="16"
              className={styles.arrowIcon}
            />
          ) : undefined
        }
      >
        {buttons.secondary.text}
      </Button>
    </div>
  );
};

export default CTAButtons;
