import React, { useState } from "react";
import Button from "../Button/Button";
import chartImage from "../../assets/Product-1.png";
import arrowRight from "../../assets/arrow-right.svg";
import styles from "./MarketingSection.module.css";

const MarketingSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Lorem ipsum", id: "lorem" },
    { label: "Corem ipsum dolor", id: "corem" },
    { label: "Forem ipsum", id: "forem" },
  ];

  return (
    <section className={styles.marketingSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            {/* Section Header */}
            <div className={`${styles.sectionHeader} text-center mb-5`}>
              <h3 className={`${styles.subtitle} mb-3`}>
                Explore Our Product Suite
              </h3>
              <div className={`${styles.underline} mx-auto mb-4`}></div>
              <h2 className={`${styles.title} mb-4`}>
                Jorem ipsum dolor sit{" "}
                <span className={styles.highlight}>amet consectetur</span>
              </h2>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div
              className={`${styles.tabNavigation} d-flex justify-content-center flex-wrap gap-3 mb-5`}
            >
              {tabs.map((tab, index) => (
                <Button
                  key={tab.id}
                  variant="outline"
                  className={`${styles.tabButton} ${
                    index === activeTab ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Main Content */}
            <div className={`${styles.contentCard} p-4 p-lg-5`}>
              <div className="row align-items-center g-4 g-lg-5">
                {/* Chart Section */}
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                  <div className={`${styles.chartSection} text-center`}>
                    <img
                      src={chartImage}
                      alt="Analytics Chart"
                      className={`${styles.chartImage} img-fluid`}
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className="col-12 col-lg-6 order-1 order-lg-2">
                  <div className={styles.textSection}>
                    <h3 className={`${styles.contentTitle} mb-4`}>
                      Jorem ipsum dolor sit amet
                    </h3>

                    <p className={`${styles.contentDescription} mb-4`}>
                      Worem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. Curabitur
                      tempus urna at turpis condimentum lobortis.
                    </p>

                    <div className={`${styles.bulletPoints} mb-4`}>
                      <p className={styles.bulletPoint}>
                        Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <p className={styles.bulletPoint}>
                        Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <p className={styles.bulletPoint}>
                        Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>

                    <div
                      className={`${styles.actions} d-flex flex-column flex-sm-row gap-3 align-items-center align-items-sm-start`}
                    >
                      <Button
                        variant="primary"
                        className={styles.primaryBtn}
                        to="/book-discovery-call"
                      >
                        Book A Discovery Call
                      </Button>

                      <Button
                        variant="secondary"
                        className={styles.secondaryBtn}
                        endIcon={
                          <img
                            src={arrowRight}
                            alt="arrow"
                            width="16"
                            height="16"
                            className={styles.arrowIcon}
                          />
                        }
                        to="/case-study"
                      >
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
