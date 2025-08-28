import { useParams } from "react-router-dom";
import CTASection from "../CTA/CTA";
import Button from "../Button/Button";
import BlogHero from "./BlogHero";
import FeaturedImage from "./FeaturedImage";
import BlogContent from "./BlogContent";
import RelatedPosts from "./RelatedPosts";
import LoadingState from "../Blog/LoadingState";
import { useBlogDetail } from "./hooks/useBlogDetail";
import styles from "./BlogDetail.module.css";

const BlogDetail = () => {
  const { id } = useParams();
  const postId = id || 1; // Fallback for development

  const { post, relatedPosts, loading, error } = useBlogDetail(postId);

  // Loading state
  if (loading) return <LoadingState />;

  // Error state
  if (error || !post) {
    return (
      <div className={styles.blogDetail}>
        <div className="container-fluid py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 text-center">
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Post Not Found</h4>
                <p>{error || "The requested post could not be found."}</p>
                <hr />
                <Button to="/blog" variant="primary">
                  Back to Blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogDetail}>
      <BlogHero post={post} />
      <FeaturedImage post={post} />
      <BlogContent post={post} />
      <RelatedPosts posts={relatedPosts} />
      <CTASection />
    </div>
  );
};

export default BlogDetail;
