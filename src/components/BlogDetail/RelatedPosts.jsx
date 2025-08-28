import BlogCard from "../Blog/BlogCard";
import styles from "./BlogDetail.module.css";

const RelatedPosts = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section className={styles.relatedSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <h2 className={styles.sectionTitle}>Related Articles</h2>
            <div className="row">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
