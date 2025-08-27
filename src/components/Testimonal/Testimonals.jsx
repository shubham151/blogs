import React, { useState } from "react";
import Button from "../Button/Button";
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import logo from "../../assets/LOGO.svg";
import styles from "./Testimonials.module.css";

const testimonialsData = [
  {
    id: 1,
    company: "Porem ipsum",
    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    testimonial:
      "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
  },
  {
    id: 2,
    company: "Korem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
    hasCase: true,
    isActive: true,
  },
  {
    id: 3,
    company: "Worem ipsum",
    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    testimonial:
      "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with middle card active

  const goToPrevious = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => Math.min(testimonialsData.length - 1, prev + 1));
  };

  const renderTestimonialCard = (testimonial, index) => {
    const isActive = index === currentSlide;

    return (
      <div
        key={testimonial.id}
        className={`${styles.testimonialCard} ${isActive ? styles.active : ""}`}
      >
        <div className={styles.cardHeader}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Company Logo" className={styles.logo} />
          </div>
          <div className={styles.companyInfo}>
            <h3 className={styles.companyName}>{testimonial.company}</h3>
            <p className={styles.companyDescription}>
              {testimonial.description}
            </p>
          </div>
        </div>

        {testimonial.hasCase && (
          <Button
            variant="secondary"
            className={styles.caseStudyBtn}
            to={`/case-study/${testimonial.id}`}
            endIcon={
              <img
                src={arrowRight}
                alt="arrow"
                width="16"
                height="16"
                className={styles.caseArrow}
              />
            }
          >
            Case Study
          </Button>
        )}

        <div className={styles.testimonialText}>
          <p>{testimonial.testimonial}</p>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            {/* Section Header */}
            <div className="text-center mb-5">
              <h2 className={styles.sectionTitle}>
                Horem ipsum dolor sit amet,{" "}
                <span className={styles.highlightText}>
                  consectetur adipiscing elit.
                </span>
              </h2>
            </div>

            {/* Testimonials Carousel */}
            <div className={styles.carouselContainer}>
              <div className={styles.carouselWrapper}>
                <div
                  className={styles.carouselTrack}
                  style={{
                    transform: `translateX(-${currentSlide * 370}px)`, // 350px card + 20px gap
                  }}
                >
                  {testimonialsData.map(renderTestimonialCard)}
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={goToPrevious}
                disabled={currentSlide === 0}
                aria-label="Previous testimonial"
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
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={goToNext}
                disabled={currentSlide >= testimonialsData.length - 1}
                aria-label="Next testimonial"
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
    </section>
  );
};

export default Testimonials;
