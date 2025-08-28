import Button from "../Button/Button";
import arrowRight from "../../assets/arrow-right-1.svg";
import arrowLeft from "../../assets/arrow-left-1.svg";
import styles from "./CaseStudies.module.css";

const CarouselNavigation = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}) => {
  return (
    <div className={`${styles.navigationArrows} d-flex gap-3`}>
      <Button
        variant="outline"
        className={styles.navButton}
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label="Previous slide"
      >
        <img
          src={arrowLeft}
          alt="previous"
          width="20"
          height="20"
          className={styles.navArrow}
        />
      </Button>

      <Button
        variant="outline"
        className={styles.navButton}
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next slide"
      >
        <img
          src={arrowRight}
          alt="next"
          width="20"
          height="20"
          className={styles.navArrow}
        />
      </Button>
    </div>
  );
};

export default CarouselNavigation;
