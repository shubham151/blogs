import React, { useState, useCallback } from "react";
import Button from "../Button/Button";
import arrowDown from "../../assets/arrow-down.svg";
import styles from "./FAQ.module.css";

const faqData = [
  {
    id: 1,
    question: "Dorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
    isOpen: true,
  },
  {
    id: 2,
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    isOpen: false,
  },
  {
    id: 3,
    question: "Dorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    isOpen: false,
  },
  {
    id: 4,
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    isOpen: false,
  },
  {
    id: 5,
    question: "Dorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum.",
    isOpen: false,
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState(() => {
    const initialSet = new Set();
    faqData.forEach((item) => {
      if (item.isOpen) {
        initialSet.add(item.id);
      }
    });
    return initialSet;
  });

  const toggleItem = useCallback((itemId) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  }, []);

  const isItemOpen = useCallback(
    (itemId) => openItems.has(itemId),
    [openItems]
  );

  const renderFAQItem = (faqItem) => {
    const isOpen = isItemOpen(faqItem.id);

    return (
      <div key={faqItem.id} className={styles.faqItem}>
        <button
          className={`${styles.faqQuestion} ${isOpen ? styles.open : ""}`}
          onClick={() => toggleItem(faqItem.id)}
          aria-expanded={isOpen}
          type="button"
        >
          <span className={styles.questionText}>{faqItem.question}</span>
          <span
            className={`${styles.toggleIcon} ${isOpen ? styles.rotated : ""}`}
          >
            <img
              src={arrowDown}
              alt="expand"
              width="16"
              height="16"
              className={styles.arrowIcon}
            />
          </span>
        </button>

        <div className={`${styles.faqAnswer} ${isOpen ? styles.expanded : ""}`}>
          <div className={styles.answerContent}>
            <p>{faqItem.answer}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.faqSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center mb-5">
              <h2 className={styles.sectionTitle}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mb-5">{faqData.map(renderFAQItem)}</div>

            <div className="text-center">
              <Button variant="primary" size="lg" to="/book-discovery-call">
                Book A Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
