import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CTASection from "../CTA/CTA";
import Button from "../Button/Button";
import arrowRight from "../../assets/arrow-right.svg";
import image2 from "../../assets/image-2.png";
import author from "../../assets/Image-3.png";
import styles from "./BlogDetail.module.css";

const BlogDetail = () => {
  //   const { id } = useParams();
  const id = 1;
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);

        // Fetch the specific post by ID
        const postResponse = await fetch(
          `https://futureoffounders.com/wp-json/wp/v2/posts/${id}`
        );

        if (!postResponse.ok) {
          throw new Error("Failed to fetch post");
        }

        const postData = await postResponse.json();
        console.log(postData);
        setPost(postData);

        // Fetch related posts (recent posts excluding current one)
        const relatedResponse = await fetch(
          `https://futureoffounders.com/wp-json/wp/v2/posts?per_page=4&exclude=${id}`
        );

        if (relatedResponse.ok) {
          const relatedData = await relatedResponse.json();
          setRelatedPosts(relatedData);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  // Helper functions
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const stripHtmlAndTruncate = (html, maxLength = 120) => {
    if (!html) return "";
    const text = html.replace(/<[^>]*>/g, "");
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const getPostImage = (post) => {
    return image2;
  };

  const renderContent = (content) => {
    if (!content) return null;

    return (
      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className={styles.blogDetail}>
        <div className="container-fluid py-5">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading post...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className={styles.heroContent}>
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

                    <h1 className={styles.heroTitle}>{post.title?.rendered}</h1>

                    <div className={styles.postMeta}>
                      <div className={styles.authorInfo}>
                        <div className={styles.authorAvatar}>
                          <img src={author} alt="Author" />
                        </div>
                        <div>
                          <p className={styles.authorName}>
                            Future of Founders
                          </p>
                          <p className={styles.postDate}>
                            {formatDate(post.date)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className={styles.imageSection}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className={styles.featuredImage}>
                <img
                  src={getPostImage(post)}
                  alt={post.title?.rendered}
                  className={styles.heroImage}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.greenShape1}></div>
                  <div className={styles.greenShape2}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="row">
                <div className="col-12 col-lg-8">
                  {/* Post Excerpt */}
                  {post.excerpt?.rendered && (
                    <div className={styles.excerpt}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      />
                    </div>
                  )}

                  {/* Main Content */}
                  {renderContent(post.content?.rendered)}

                  {/* Quote Section - This would typically be extracted from content */}
                  <div className={styles.quoteSection}>
                    <div className={styles.quote}>
                      <blockquote>
                        "Building a culture of wellness isn't just about
                        perks—it's about creating an environment where people
                        can thrive both personally and professionally."
                      </blockquote>
                      <div className={styles.quoteAuthor}>
                        <img src={author} alt="Quote author" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="col-12 col-lg-4">
                  <div className={styles.sidebar}>
                    <div className={styles.sidebarCard}>
                      <h3>About This Post</h3>
                      <p>Published on {formatDate(post.date)}</p>
                      <p>Reading time: 8 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-10">
                <h2 className={styles.sectionTitle}>Related Articles</h2>
                <div className="row">
                  {relatedPosts.map((relatedPost) => (
                    <div
                      className="col-12 col-md-6 col-lg-3 mb-4"
                      key={relatedPost.id}
                    >
                      <div className={styles.relatedCard}>
                        <div className={styles.cardImage}>
                          <img
                            src={getPostImage(relatedPost)}
                            alt={relatedPost.title?.rendered}
                            className={styles.cardImageImg}
                          />
                          <div className={styles.imageOverlay}>
                            <div className={styles.greenShape1}></div>
                            <div className={styles.greenShape2}></div>
                          </div>
                        </div>
                        <div className={styles.cardContent}>
                          <h4 className={styles.cardTitle}>
                            {relatedPost.title?.rendered}
                          </h4>
                          <p className={styles.cardDescription}>
                            {stripHtmlAndTruncate(
                              relatedPost.excerpt?.rendered
                            )}
                          </p>
                          <Button
                            variant="secondary"
                            className={styles.readMoreButton}
                            to={`/blog/${relatedPost.id}`}
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default BlogDetail;
