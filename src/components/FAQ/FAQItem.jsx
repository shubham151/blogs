import arrowDown from "../../assets/arrow-down.svg";
import styles from "./FAQ.module.css";

const FAQItem = ({ faqItem, isOpen, onToggle }) => {
  return (
    <div className={styles.faqItem}>
      <button
        className={`${styles.faqQuestion} ${isOpen ? styles.open : ""}`}
        onClick={() => onToggle(faqItem.id)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faqItem.id}`}
        type="button"
      >
        <span className={styles.questionText}>{faqItem.question}</span>
        <span
          className={`${styles.toggleIcon} ${isOpen ? styles.rotated : ""}`}
          aria-hidden="true"
        >
          <img
            src={arrowDown}
            alt=""
            width="16"
            height="16"
            className={styles.arrowIcon}
          />
        </span>
      </button>

      <div
        id={`faq-answer-${faqItem.id}`}
        className={`${styles.faqAnswer} ${isOpen ? styles.expanded : ""}`}
        role="region"
        aria-hidden={!isOpen}
      >
        <div className={styles.answerContent}>
          <p>{faqItem.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
