import Button from "../Button/Button";
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import styles from "./Testimonials.module.css";

const CarouselNavigation = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}) => {
  return (
    <>
      <Button
        variant="outline"
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label="Previous testimonial"
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
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next testimonial"
      >
        <img
          src={arrowRight}
          alt="next"
          width="20"
          height="20"
          className={styles.navArrow}
        />
      </Button>
    </>
  );
};

export default CarouselNavigation;
