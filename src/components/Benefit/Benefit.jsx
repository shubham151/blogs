import styles from "./Benefit.module.css";
import AutomationIcon from "../../assets/automation.svg";
import BookmarkIcon from "../../assets/bookmark_flag.svg";
import MovingIcon from "../../assets/moving.svg";
import usaMap from "../../assets/usa-map.svg";

const benefitData = [
  {
    id: 1,
    icon: MovingIcon,
    title: "Vorem ipsum dolor",
    description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    icon: BookmarkIcon,
    title: "Jorem ipsum dolor sit",
    description: "Korem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    icon: AutomationIcon,
    title: "Gorem ipsum",
    description: "Forem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const BenefitSection = () => {
  const renderBenefitCard = (benefit) => (
    <div key={benefit.id} className="col-12 col-md-6 col-lg-4">
      <div className={`${styles.benefitCard} h-100`}>
        <div className={styles.cardIcon}>
          <img
            src={benefit.icon}
            alt={`${benefit.title} icon`}
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

  return (
    <section className={styles.benefitSection}>
      {/* Background USA Map */}
      <div className={styles.backgroundDecor}>
        <img
          src={usaMap}
          alt=""
          className={`${styles.usaMap} d-none d-lg-block`}
        />
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            {/* Section Header */}
            <div className={`${styles.sectionHeader} text-center mb-5`}>
              <h2 className={styles.sectionTitle}>Rorem ipsum dolor</h2>
              <div className={`${styles.titleUnderline} mx-auto`}></div>
            </div>

            {/* Benefits Grid */}
            <div className="row g-4 justify-content-center">
              {benefitData.map(renderBenefitCard)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
