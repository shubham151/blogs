import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import CarouselNavigation from "./CarouselNavigation";
import styles from "./Testimonials.module.css";
import {
  SECTION_HEADER,
  TESTIMONIALS_DATA,
  CAROUSEL_CONFIG,
} from "./TestimonialsConstants";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(
    CAROUSEL_CONFIG.initialSlide
  );

  const goToPrevious = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => Math.min(TESTIMONIALS_DATA.length - 1, prev + 1));
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            {/* Section Header */}
            <div className="text-center mb-5">
              <h2 className={styles.sectionTitle}>
                {SECTION_HEADER.title}{" "}
                <span className={styles.highlightText}>
                  {SECTION_HEADER.highlight}
                </span>
              </h2>
            </div>

            {/* Testimonials Carousel */}
            <div className={styles.carouselContainer}>
              <div className={styles.carouselWrapper}>
                <div
                  className={styles.carouselTrack}
                  style={{
                    transform: `translateX(calc(-${currentSlide} * (var(--card-width) + var(--card-gap))))`,
                  }}
                >
                  {TESTIMONIALS_DATA.map((testimonial, index) => (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                      isActive={index === currentSlide}
                    />
                  ))}
                </div>
              </div>

              <CarouselNavigation
                onPrevious={goToPrevious}
                onNext={goToNext}
                canGoPrevious={currentSlide > 0}
                canGoNext={currentSlide < TESTIMONIALS_DATA.length - 1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
