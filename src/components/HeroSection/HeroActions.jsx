import Button from "../Button/Button";
import arrowRight from "../../assets/arrow-right.svg";
import styles from "./HeroSection.module.css";
import { HERO_ACTIONS } from "./HeroSectionConstants";

const HeroActions = () => {
  return (
    <div
      className={`${styles.heroActions} d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3`}
    >
      {HERO_ACTIONS.map((action, index) => (
        <Button
          key={index}
          variant={action.variant}
          size={action.size}
          className={styles[action.className]}
          to={action.to}
          endIcon={
            action.hasArrow ? (
              <img
                src={arrowRight}
                alt="arrow"
                width="32"
                height="32"
                className={styles.arrowIcon}
              />
            ) : undefined
          }
        >
          {action.text}
        </Button>
      ))}
    </div>
  );
};

export default HeroActions;
