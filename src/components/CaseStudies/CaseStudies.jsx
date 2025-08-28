import CaseStudyCard from "./CaseStudyCard";
import CarouselNavigation from "./CarouselNavigation";
import { useCarousel } from "./hooks/useCarousel";
import styles from "./CaseStudies.module.css";
import {
  SECTION_HEADER,
  CASE_STUDIES_DATA,
  CAROUSEL_CONFIG,
} from "./CaseStudiesConstant";

const CaseStudies = () => {
  const {
    currentSlide,
    goToPrevious,
    goToNext,
    getTranslateX,
    canGoPrevious,
    canGoNext,
  } = useCarousel(CASE_STUDIES_DATA.length, CAROUSEL_CONFIG);

  return (
    <section className={styles.caseStudiesSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-11">
            {/* Section Header */}
            <div className={`${styles.sectionHeader} text-center mb-5`}>
              <h2 className={`${styles.sectionSubtitle} mb-3`}>
                {SECTION_HEADER.subtitle}
              </h2>
              <div className={`${styles.titleUnderline} mx-auto mb-4`}></div>
              <h3 className={styles.sectionTitle}>{SECTION_HEADER.title}</h3>
            </div>

            {/* Case Studies Carousel */}
            <div className={styles.carouselContainer}>
              <div className={styles.carouselWrapper}>
                <div
                  className={styles.carouselTrack}
                  style={{
                    transform: `translateX(-${getTranslateX()}px)`,
                  }}
                >
                  {CASE_STUDIES_DATA.map((study) => (
                    <CaseStudyCard key={study.id} study={study} />
                  ))}
                </div>
              </div>

              <CarouselNavigation
                onPrevious={goToPrevious}
                onNext={goToNext}
                canGoPrevious={canGoPrevious}
                canGoNext={canGoNext}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
