import CTASection from "../CTA/CTA";
import BlogHeader from "./BlogHeader";
import SearchAndFilter from "./SearchAndFilter";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import { useBlogData } from "./hooks/useBlogData";
import styles from "./BlogPage.module.css";

const BlogPage = () => {
  const {
    loading,
    error,
    searchTerm,
    sortBy,
    currentPage,
    featuredPosts,
    allPosts,
    currentPosts,
    totalPages,
    handleSearch,
    handleSortChange,
    handlePageChange,
  } = useBlogData();

  // Loading state
  if (loading) return <LoadingState />;

  // Error state
  if (error) return <ErrorState error={error} />;

  const renderFeaturedSection = () => {
    if (featuredPosts.length === 0) return null;

    return (
      <section className={styles.featuredSection}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <h2 className={styles.sectionTitle}>Featured Posts</h2>
              <div className="row">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} isFeatured={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderAllPostsSection = () => {
    if (allPosts.length === 0) return null;

    return (
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
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderEmptyState = () => {
    if (featuredPosts.length > 0 || allPosts.length > 0) return null;

    return (
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
    );
  };

  return (
    <div className={styles.blogPage}>
      <BlogHeader />

      <SearchAndFilter
        searchTerm={searchTerm}
        sortBy={sortBy}
        onSearch={handleSearch}
        onSortChange={handleSortChange}
      />

      {renderFeaturedSection()}
      {renderAllPostsSection()}
      {renderEmptyState()}

      <CTASection />
    </div>
  );
};

export default BlogPage;
