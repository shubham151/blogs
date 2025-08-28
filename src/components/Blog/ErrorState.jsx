import styles from "./BlogPage.module.css";

const ErrorState = ({ error }) => (
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

export default ErrorState;
