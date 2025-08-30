import { useState } from "react";
import SectionHeader from "./SectionHeader";
import TabNavigation from "./TabNavigation";
import TabContent from "./TabContent";
import styles from "./MarketingSection.module.css";
import { TAB_CONTENT } from "./MarketingSectionConstants";

const MarketingSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <section className={styles.marketingSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <SectionHeader />
            <TabNavigation
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
            <TabContent content={TAB_CONTENT[activeTab]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
