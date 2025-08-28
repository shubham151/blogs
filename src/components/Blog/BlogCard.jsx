import Button from "../Button/Button";
import arrowRight from "../../assets/arrow-right.svg";
import styles from "./BlogPage.module.css";
import {
  stripHtmlAndTruncate,
  formatDate,
  getPostImage,
  getPostCategories,
} from "./blogUtils";
import { BLOG_CONFIG } from "./BlogConstants";

const BlogCard = ({ post, isFeatured = false }) => {
  const handleImageError = (e) => {
    e.target.src = BLOG_CONFIG.placeholders.fallbackImage;
  };

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div
        className={`${styles.blogCard} ${
          isFeatured ? styles.featuredCard : ""
        } h-100`}
      >
        <div className={styles.cardImage}>
          <img
            src={getPostImage(post, BLOG_CONFIG.placeholders.image)}
            alt={post.title?.rendered || "Blog Post"}
            className={styles.cardImageImg}
            onError={handleImageError}
          />
        </div>

        <div className={styles.cardContent}>
          <div className={styles.cardMeta}>
            <span className={styles.cardCategory}>
              {getPostCategories(post, BLOG_CONFIG.placeholders.category)}
            </span>
            <span className={styles.cardDate}>{formatDate(post.date)}</span>
          </div>
          <h3 className={styles.cardTitle}>
            {post.title?.rendered || "Untitled"}
          </h3>
          <p className={styles.cardDescription}>
            {stripHtmlAndTruncate(post.excerpt?.rendered)}
          </p>

          <Button
            variant="secondary"
            className={styles.readMoreButton}
            to={`/blog/${post.id}`}
            endIcon={
              <img
                src={arrowRight}
                alt="arrow"
                width="16"
                height="16"
                className={styles.arrowIcon}
              />
            }
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
