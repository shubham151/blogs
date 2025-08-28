import Button from "../Button/Button";
import styles from "./MarketingSection.module.css";
import { TAB_CONTENT } from "./MarketingSectionConstants";

const TabNavigation = ({ activeTab, onTabChange }) => {
  return (
    <div
      className={`${styles.tabNavigation} d-flex justify-content-center flex-wrap gap-3 mb-5`}
    >
      {TAB_CONTENT.map((tab, index) => (
        <Button
          key={tab.id}
          variant="outline"
          className={`${styles.tabButton} ${
            index === activeTab ? styles.active : ""
          }`}
          onClick={() => onTabChange(index)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

export default TabNavigation;
