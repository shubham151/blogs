import Button from "../Button/Button";
import arrowRight from "../../assets/arrow-right.svg";
import styles from "./Testimonials.module.css";

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`${styles.testimonialCard} ${isActive ? styles.active : ""}`}
    >
      <div className={styles.cardHeader}>
        <div className={styles.logoContainer}>
          <img
            src={testimonial.logo}
            alt={`${testimonial.company} logo`}
            className={styles.logo}
          />
        </div>
        <div className={styles.companyInfo}>
          <h3 className={styles.companyName}>{testimonial.company}</h3>
          <p className={styles.companyDescription}>{testimonial.description}</p>
        </div>
      </div>

      {testimonial.hasCase && (
        <Button
          variant="secondary"
          className={styles.caseStudyBtn}
          to={`/case-study/${testimonial.caseStudySlug}`}
          endIcon={
            <img
              src={arrowRight}
              alt="arrow"
              width="16"
              height="16"
              className={styles.caseArrow}
            />
          }
        >
          Case Study
        </Button>
      )}

      <div className={styles.testimonialText}>
        <p>{testimonial.testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
