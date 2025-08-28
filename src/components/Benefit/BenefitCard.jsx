import styles from "./Benefit.module.css";

const BenefitCard = ({ benefit }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className={`${styles.benefitCard} h-100`}>
        <div className={styles.cardIcon}>
          <img
            src={benefit.icon}
            alt={benefit.altText}
            className={styles.iconImage}
          />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{benefit.title}</h3>
          <p className={styles.cardDescription}>{benefit.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
