import Button from "../Button/Button";
import FAQItem from "./FAQItem";
import { useFAQ } from "./hooks/useFAQ";
import styles from "./FAQ.module.css";
import { SECTION_HEADER, FAQ_DATA, CTA_CONFIG } from "./FAQConstants";

const FAQ = () => {
  const { toggleItem, isItemOpen } = useFAQ(FAQ_DATA);

  return (
    <section className={styles.faqSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Section Header */}
            <div className="text-center mb-5">
              <h2 className={styles.sectionTitle}>{SECTION_HEADER.title}</h2>
              {SECTION_HEADER.subtitle && (
                <p className={styles.sectionSubtitle}>
                  {SECTION_HEADER.subtitle}
                </p>
              )}
            </div>

            {/* FAQ Items */}
            <div className="mb-5">
              {FAQ_DATA.map((faqItem) => (
                <FAQItem
                  key={faqItem.id}
                  faqItem={faqItem}
                  isOpen={isItemOpen(faqItem.id)}
                  onToggle={toggleItem}
                />
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Button
                variant={CTA_CONFIG.variant}
                size={CTA_CONFIG.size}
                to={CTA_CONFIG.href}
              >
                {CTA_CONFIG.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
