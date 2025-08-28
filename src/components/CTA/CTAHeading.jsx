import styles from "./CTA.module.css";

const CTAHeading = ({ heading, subtitle }) => {
  return (
    <div className={`${styles.headingGroup} mb-4`}>
      <h2 className={styles.mainTitle}>
        <span className={styles.darkText}>{heading.darkText}</span>
        <br />
        <span className={styles.lightText}>{heading.lightText}</span>
      </h2>
      <div className={`${styles.titleUnderline} mx-auto`}></div>
      <h3 className={`${styles.subtitle} mb-4`}>{subtitle}</h3>
    </div>
  );
};

export default CTAHeading;
