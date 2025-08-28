import styles from "./BlogPage.module.css";
import { BLOG_CONFIG } from "./BlogConstants";

const BlogHeader = () => {
  return (
    <section className={styles.headerSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <div className={styles.headerContent}>
              <h1 className={styles.pageTitle}>
                <span className={styles.subtitle}>
                  {BLOG_CONFIG.header.subtitle}
                </span>
                <span className={styles.mainTitle}>
                  {BLOG_CONFIG.header.mainTitle}
                </span>
              </h1>
              <div className={`${styles.titleUnderline} mx-auto`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
