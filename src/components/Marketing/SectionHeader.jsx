import styles from "./MarketingSection.module.css";
import { SECTION_HEADER } from "./MarketingSectionConstants";

const SectionHeader = () => {
  return (
    <div className={`${styles.sectionHeader} text-center mb-5`}>
      <h3 className={`${styles.subtitle} mb-3`}>{SECTION_HEADER.subtitle}</h3>
      <div className={`${styles.underline} mx-auto mb-4`}></div>
      <h2 className={`${styles.title} mb-4`}>
        {SECTION_HEADER.title}{" "}
        <span className={styles.highlight}>{SECTION_HEADER.highlight}</span>
      </h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <p className={styles.description}>{SECTION_HEADER.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
