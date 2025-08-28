import { getPostImage } from "./blogDetailUtil";
import { BLOG_DETAIL_CONFIG } from "./BlogDetailConstants";
import styles from "./BlogDetail.module.css";

const FeaturedImage = ({ post }) => {
  if (!post) return null;

  return (
    <section className={styles.imageSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className={styles.featuredImage}>
              <img
                src={getPostImage(post, BLOG_DETAIL_CONFIG.placeholders.image)}
                alt={post.title?.rendered}
                className={styles.heroImage}
                onError={(e) => {
                  e.target.src = BLOG_DETAIL_CONFIG.placeholders.fallbackImage;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImage;
