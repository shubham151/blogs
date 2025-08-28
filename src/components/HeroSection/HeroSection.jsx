import BackgroundDecor from "./BackgroundDecor";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={`${styles.heroSection} d-flex align-items-center`}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <BackgroundDecor />
            <HeroContent />
            <HeroActions />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
