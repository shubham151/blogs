import BlogPage from "../../components/Blog/BlogPage";
import styles from "./HomePage.module.css";
import HeroSection from "../HeroSection/HeroSection";
import MarketingSection from "../Marketing/MarketingSection";
import Benefit from "../Benefit/Benefit";
import CaseStudies from "../CaseStudies/CaseStudies";
import FAQ from "../FAQ/FAQ";
import Testimonials from "../Testimonal/Testimonals";
import CTA from "../CTA/CTA";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <MarketingSection />
      <Benefit />
      <CaseStudies />
      <FAQ />
      <Testimonials />
      <CTA />
      <BlogPage />
    </div>
  );
};

export default HomePage;
