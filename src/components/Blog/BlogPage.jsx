import { useState } from "react";
import CTASection from "../CTA/CTA";
import Button from "../Button/Button";
import arrowRight from "../../assets/arrow-right.svg";
import searchIcon from "../../assets/search.svg";
import styles from "./BlogPage.module.css";
import image1 from "../../assets/Image-1.png";

const blogData = {
  featured: [
    {
      id: 1,
      title: "Corem ipsum dolor",
      description:
        "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: image1,
      category: "Press Release",
    },
    {
      id: 2,
      title: "Corem ipsum dolor",
      description:
        "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: image1,
      category: "Press Release",
    },
    {
      id: 3,
      title: "Corem ipsum dolor",
      description:
        "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: image1,
      category: "Press Release",
    },
    {
      id: 4,
      title: "Corem ipsum dolor",
      description:
        "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: image1,
      category: "Press Release",
    },
  ],
  all: [
    {
      id: 5,
      title: "Corem ipsum dolor",
      description:
        "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: image1,
      category: "Press Release",
    },
    {
      id: 6,
      title: "Corem ipsum dolor",
      description:
        "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: image1,
      category: "Press Release",
    },
    {
      id: 7,
      title: "Corem ipsum dolor",
      description:
        "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: image1,
      category: "Press Release",
    },
    {
      id: 8,
      title: "Corem ipsum dolor",
      description:
        "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: image1,
      category: "Press Release",
    },
  ],
};

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
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
            src={post.image}
            alt={post.title}
            className={styles.cardImageImg}
          />
        </div>

        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{post.title}</h3>
          <p className={styles.cardDescription}>{post.description}</p>

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
            Read Case Study
          </Button>
        </div>
      </div>
    </div>
  );

  // Pagination logic
  const itemsPerPage = 8;
  const totalPages = Math.ceil(blogData.all.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = blogData.all.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.blogPage}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <div className={styles.headerContent}>
                <h1 className={styles.pageTitle}>
                  <span className={styles.subtitle}>
                    Gorem ipsum dolor sit amet
                  </span>
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
                      placeholder="Search..."
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

      {/* Featured Press Releases */}
      <section className={styles.featuredSection}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <h2 className={styles.sectionTitle}>Featured Press Releases</h2>
              <div className="row">
                {blogData.featured.map((post) => renderBlogCard(post, true))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Press Releases */}
      <section className={styles.allPostsSection}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <h2 className={styles.sectionTitle}>All Press Releases</h2>
              <div className="row mb-5">
                {currentPosts.map((post) => renderBlogCard(post))}
              </div>

              {/* Pagination */}
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
                        handlePageChange(Math.min(totalPages, currentPage + 1))
                      }
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                    >
                      →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default BlogPage;
