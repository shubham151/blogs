import searchIcon from "../../assets/search.svg";
import styles from "./BlogPage.module.css";
import { BLOG_CONFIG } from "./BlogConstants";

const SearchAndFilter = ({ searchTerm, sortBy, onSearch, onSortChange }) => {
  return (
    <section className={styles.searchSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="row align-items-center">
              <div className="col-12 col-lg-8 mb-3 mb-lg-0">
                <div className={styles.searchBox}>
                  <input
                    type="text"
                    placeholder={BLOG_CONFIG.search.placeholder}
                    value={searchTerm}
                    onChange={(e) => onSearch(e.target.value)}
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
                  <label className={`${styles.sortLabel} me-3`}>Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                    className={styles.sortSelect}
                  >
                    {BLOG_CONFIG.search.sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchAndFilter;
