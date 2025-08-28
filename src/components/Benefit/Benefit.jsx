import BenefitCard from "./BenefitCard";
import usaMap from "../../assets/usa-map.svg";
import styles from "./Benefit.module.css";
import { SECTION_HEADER, BENEFITS_DATA } from "./BenefitConstant";

const BenefitSection = () => {
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
              <h2 className={styles.sectionTitle}>{SECTION_HEADER.title}</h2>
              <div className={`${styles.titleUnderline} mx-auto`}></div>
            </div>

            {/* Benefits Grid */}
            <div className="row g-4 justify-content-center">
              {BENEFITS_DATA.map((benefit) => (
                <BenefitCard key={benefit.id} benefit={benefit} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
