import Button from "../Button/Button";
import arrowRightTail from "../../assets/arrow-right.svg";
import styles from "./CaseStudies.module.css";

const CaseStudyCard = ({ study }) => {
  return (
    <div className={styles.caseStudyCard}>
      <div className={styles.cardImageContainer}>
        <img
          src={study.image}
          alt={study.title}
          className={styles.cardImage}
          loading="lazy"
        />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{study.title}</h3>
        <p className={styles.cardDescription}>{study.description}</p>

        <Button
          variant="secondary"
          className={styles.cardLink}
          to={`/case-study/${study.slug}`}
          endIcon={
            <img
              src={arrowRightTail}
              alt="arrow"
              width="16"
              height="16"
              className={styles.linkArrow}
            />
          }
        >
          {study.linkText}
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
