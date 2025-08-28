import Button from "../Button/Button";
import { formatDate } from "./blogDetailUtil";
import { BLOG_DETAIL_CONFIG } from "./BlogDetailConstants";
import styles from "./BlogDetail.module.css";

const BlogHero = ({ post }) => {
  if (!post) return null;

  const renderBreadcrumb = () => (
    <div className={styles.breadcrumb}>
      <Button to="/" variant="text">
        Home
      </Button>
      <span>/</span>
      <Button to="/blog" variant="text">
        Blog
      </Button>
      <span>/</span>
      <span>{post.title?.rendered}</span>
    </div>
  );

  const renderPostMeta = () => (
    <div className={styles.postMeta}>
      <div className={styles.authorInfo}>
        <div className={styles.authorAvatar}>
          <img src={BLOG_DETAIL_CONFIG.placeholders.author} alt="Author" />
        </div>
        <div>
          <p className={styles.authorName}>
            {BLOG_DETAIL_CONFIG.placeholders.authorName}
          </p>
          <p className={styles.postDate}>{formatDate(post.date)}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className={styles.heroSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className={styles.heroContent}>
                  {renderBreadcrumb()}
                  <h1 className={styles.heroTitle}>{post.title?.rendered}</h1>
                  {renderPostMeta()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
