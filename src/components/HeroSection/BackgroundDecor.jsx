import polygonLines from "../../assets/polygon-lines.svg";
import styles from "./HeroSection.module.css";

const BackgroundDecor = () => {
  return (
    <div className={styles.backgroundDecor}>
      <img
        src={polygonLines}
        alt=""
        className={`${styles.polygonLines} ${styles.leftSide}`}
      />
      <img
        src={polygonLines}
        alt=""
        className={`${styles.polygonLines} ${styles.rightSide}`}
      />
    </div>
  );
};

export default BackgroundDecor;
