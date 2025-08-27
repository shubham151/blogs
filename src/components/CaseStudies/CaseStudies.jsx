import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./CaseStudies.module.css";
import CityImage from "../../assets/Image-1.png";
import arrowRight from "../../assets/arrow-right-1.svg";
import arrowRightTail from "../../assets/arrow-right.svg";
import arrowLeft from "../../assets/arrow-left-1.svg";

// Case studies data
const caseStudiesData = [
  {
    id: 1,
    title: "Corem ipsum dolor",
    description:
      "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    linkText: "Read Case Study",
    image: CityImage,
  },
  {
    id: 2,
    title: "Jorem ipsum dolor",
    description:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    linkText: "Read Case Study",
    image: CityImage,
  },
  {
    id: 3,
    title: "Yorem ipsum dolor",
    description:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    linkText: "Read Case Study",
    image: CityImage,
  },
  {
    id: 4,
    title: "Yorem ipsum dolor",
    description:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    linkText: "Read Case Study",
    image: CityImage,
  },
];

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigation functions - simplified
  const goToPrevious = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => Math.min(caseStudiesData.length - 1, prev + 1));
  };

  // Pure function to render case study card
  const renderCaseStudyCard = (study, index) => (
    <div key={study.id} className={styles.caseStudyCard}>
      <div className={styles.cardImageContainer}>
        <img src={study.image} alt={study.title} className={styles.cardImage} />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{study.title}</h3>
        <p className={styles.cardDescription}>{study.description}</p>

        <Button
          variant="secondary"
          className={styles.cardLink}
          to={`/case-study/${study.id}`}
          endIcon={
            <img
              src={arrowRightTail}
              alt="arrow"
              width="16"
              height="16"
              className={styles.linkArrow}
            />
          }
        >
          {study.linkText}
        </Button>
      </div>
    </div>
  );

  return (
    <section className={styles.caseStudiesSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-11">
            {/* Section Header */}
            <div className={`${styles.sectionHeader} text-center mb-5`}>
              <h2 className={`${styles.sectionSubtitle} mb-3`}>Sorem ipsum</h2>
              <div className={`${styles.titleUnderline} mx-auto mb-4`}></div>
              <h3 className={styles.sectionTitle}>Dorem ipsum dolor sit</h3>
            </div>

            {/* Case Studies Carousel */}
            <div className={styles.carouselContainer}>
              <div className={styles.carouselWrapper}>
                <div
                  className={styles.carouselTrack}
                  style={{
                    transform: `translateX(-${currentSlide * 340}px)`, // 320px card + 20px gap
                  }}
                >
                  {caseStudiesData.map(renderCaseStudyCard)}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className={`${styles.navigationArrows} d-flex gap-3`}>
                <Button
                  variant="outline"
                  className={styles.navButton}
                  onClick={goToPrevious}
                  disabled={currentSlide === 0}
                  aria-label="Previous slide"
                >
                  <img
                    src={arrowLeft}
                    alt="previous"
                    width="20"
                    height="20"
                    className={styles.navArrow}
                  />
                </Button>
                <Button
                  variant="outline"
                  className={styles.navButton}
                  onClick={goToNext}
                  disabled={currentSlide >= caseStudiesData.length - 1}
                  aria-label="Next slide"
                >
                  <img
                    src={arrowRight}
                    alt="next"
                    width="20"
                    height="20"
                    className={styles.navArrow}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
