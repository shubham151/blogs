import styles from "./BlogPage.module.css";

const LoadingState = () => (
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

export default LoadingState;
