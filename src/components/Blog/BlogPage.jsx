import React, { useState, useEffect } from "react";
import CTASection from "../CTA/CTA";
import Button from "../Button/Button";
import arrowRight from "../../assets/arrow-right.svg";
import searchIcon from "../../assets/search.svg";
import styles from "./BlogPage.module.css";
import image2 from "../../assets/image-2.png";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch posts from WordPress API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://futureoffounders.com/wp-json/wp/v2/posts?per_page=20"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  // Filter and sort posts
  const getFilteredPosts = () => {
    let filtered = posts.filter((post) => {
      const title = post.title?.rendered || "";
      const excerpt = post.excerpt?.rendered || "";
      const searchLower = searchTerm.toLowerCase();

      return (
        title.toLowerCase().includes(searchLower) ||
        excerpt.toLowerCase().includes(searchLower)
      );
    });

    // Sort posts
    switch (sortBy) {
      case "oldest":
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "title":
        filtered.sort((a, b) => {
          const titleA = a.title?.rendered || "";
          const titleB = b.title?.rendered || "";
          return titleA.localeCompare(titleB);
        });
        break;
      case "latest":
      default:
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    }

    return filtered;
  };

  // Get featured posts (first 4)
  const getFeaturedPosts = () => {
    return getFilteredPosts().slice(0, 4);
  };

  // Get remaining posts for "All Posts" section
  const getAllPosts = () => {
    return getFilteredPosts().slice(4);
  };

  // Helper function to strip HTML tags and truncate text
  const stripHtmlAndTruncate = (html, maxLength = 150) => {
    if (!html) return "";
    const text = html.replace(/<[^>]*>/g, "");
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  // Helper function to get featured image or placeholder
  const getPostImage = (post) => {
    return image2;
  };

  const getPostCategories = (post) => {
    return "Blog Post";
  };

  // Format date helper
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Render blog card
  const renderBlogCard = (post, isFeatured = false) => (
    <div className="col-12 col-md-6 col-lg-3 mb-4" key={post.id}>
      <div
        className={`${styles.blogCard} ${
          isFeatured ? styles.featuredCard : ""
        } h-100`}
      >
        <div className={styles.cardImage}>
          <img
            src={getPostImage(post)}
            alt={post.title?.rendered || "Blog Post"}
            className={styles.cardImageImg}
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/400x200/00B894/FFFFFF?text=Blog+Post";
            }}
          />
        </div>

        <div className={styles.cardContent}>
          <div className={styles.cardMeta}>
            <span className={styles.cardCategory}>
              {getPostCategories(post)}
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

  // Pagination logic
  const itemsPerPage = 8;
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = allPosts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Loading state
  if (loading) {
    return (
      <div className={styles.blogPage}>
        <div className="container-fluid py-5">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading posts...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={styles.blogPage}>
        <div className="container-fluid py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 text-center">
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Error Loading Posts</h4>
                <p>{error}</p>
                <hr />
                <p className="mb-0">Please try refreshing the page.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const featuredPosts = getFeaturedPosts();

  return (
    <div className={styles.blogPage}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <div className={styles.headerContent}>
                <h1 className={styles.pageTitle}>
                  <span className={styles.subtitle}>Future of Founders</span>
                  <span className={styles.mainTitle}>Blog</span>
                </h1>
                <div className={`${styles.titleUnderline} mx-auto`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className={styles.searchSection}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="row align-items-center">
                <div className="col-12 col-lg-8 mb-3 mb-lg-0">
                  <div className={styles.searchBox}>
                    <input
                      type="text"
                      placeholder="Search posts..."
                      value={searchTerm}
                      onChange={handleSearch}
                      className={styles.searchInput}
                    />
                    <button className={styles.searchButton}>
                      <img
                        src={searchIcon}
                        alt="search"
                        width="20"
                        height="20"
                        className={styles.searchIcon}
                      />
                    </button>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="d-flex align-items-center justify-content-lg-end">
                    <label className={`${styles.sortLabel} me-3`}>
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={handleSortChange}
                      className={styles.sortSelect}
                    >
                      <option value="latest">Latest</option>
                      <option value="oldest">Oldest</option>
                      <option value="title">Title</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className={styles.featuredSection}>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-10">
                <h2 className={styles.sectionTitle}>Featured Posts</h2>
                <div className="row">
                  {featuredPosts.map((post) => renderBlogCard(post, true))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* All Posts */}
      {allPosts.length > 0 && (
        <section className={styles.allPostsSection}>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-10">
                <h2 className={styles.sectionTitle}>
                  {searchTerm
                    ? `Search Results (${allPosts.length})`
                    : "All Posts"}
                </h2>
                <div className="row mb-5">
                  {currentPosts.map((post) => renderBlogCard(post))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="row">
                    <div className="col-12">
                      <div
                        className={`${styles.pagination} d-flex justify-content-center align-items-center gap-2`}
                      >
                        <Button
                          variant="outline"
                          className={styles.pageButton}
                          onClick={() =>
                            handlePageChange(Math.max(1, currentPage - 1))
                          }
                          disabled={currentPage === 1}
                          aria-label="Previous page"
                        >
                          ←
                        </Button>

                        {Array.from({ length: totalPages }, (_, index) => (
                          <Button
                            key={index + 1}
                            variant={
                              currentPage === index + 1 ? "primary" : "outline"
                            }
                            className={styles.pageButton}
                            onClick={() => handlePageChange(index + 1)}
                          >
                            {index + 1}
                          </Button>
                        ))}

                        <Button
                          variant="outline"
                          className={styles.pageButton}
                          onClick={() =>
                            handlePageChange(
                              Math.min(totalPages, currentPage + 1)
                            )
                          }
                          disabled={currentPage === totalPages}
                          aria-label="Next page"
                        >
                          →
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      {/* No posts found */}
      {!loading && allPosts.length === 0 && featuredPosts.length === 0 && (
        <section className="py-5">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 text-center">
                <h3>No posts found</h3>
                <p className="text-muted">
                  {searchTerm
                    ? "Try adjusting your search terms."
                    : "No posts are available at the moment."}
                </p>
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

export default BlogPage;
