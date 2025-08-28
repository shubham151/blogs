import Button from "../Button/Button";
import styles from "./BlogPage.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <Button
        key={index + 1}
        variant={currentPage === index + 1 ? "primary" : "outline"}
        className={styles.pageButton}
        onClick={() => onPageChange(index + 1)}
      >
        {index + 1}
      </Button>
    ));
  };

  return (
    <div className="row">
      <div className="col-12">
        <div
          className={`${styles.pagination} d-flex justify-content-center align-items-center gap-2`}
        >
          <Button
            variant="outline"
            className={styles.pageButton}
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            ←
          </Button>

          {renderPageNumbers()}

          <Button
            variant="outline"
            className={styles.pageButton}
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
