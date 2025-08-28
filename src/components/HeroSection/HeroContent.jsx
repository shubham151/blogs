import styles from "./HeroSection.module.css";
import { HERO_CONTENT } from "./HeroSectionConstants";

const HeroContent = () => {
  const renderTitle = () => {
    const { text, highlights } = HERO_CONTENT.title;
    let titleParts = [text];

    highlights.forEach((highlight) => {
      titleParts = titleParts.flatMap((part) =>
        typeof part === "string"
          ? part.split(highlight).reduce((acc, split, index) => {
              if (index > 0) {
                acc.push(
                  <span key={highlight} className={styles.highlight}>
                    {highlight}
                  </span>
                );
              }
              if (split) acc.push(split);
              return acc;
            }, [])
          : [part]
      );
    });

    return titleParts;
  };

  return (
    <div className={`${styles.heroContent} text-center`}>
      {/* Hero Title */}
      <h1 className={`${styles.heroTitle} mb-3`}>{renderTitle()}</h1>

      {/* Underline */}
      <div className={`${styles.underline} mx-auto`}></div>

      {/* Hero Subtitle */}
      <h2 className={`${styles.heroSubtitle} mb-5`}>{HERO_CONTENT.subtitle}</h2>

      {/* Hero Description */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-10 col-lg-12">
          <p className={styles.heroDescription}>{HERO_CONTENT.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
