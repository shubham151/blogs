import { sanitizeContent, calculateReadingTime } from "./blogDetailUtil";
import { BLOG_DETAIL_CONFIG } from "./BlogDetailConstants";
import styles from "./BlogDetail.module.css";

const BlogContent = ({ post }) => {
  if (!post) return null;

  const renderExcerpt = () => {
    if (!post.excerpt?.rendered) return null;

    return (
      <div className={styles.excerpt}>
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeContent(post.excerpt.rendered),
          }}
        />
      </div>
    );
  };

  const renderMainContent = () => {
    if (!post.content?.rendered) return null;

    return (
      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{
          __html: sanitizeContent(post.content.rendered),
        }}
      />
    );
  };

  const renderQuoteSection = () => (
    <div className={styles.quoteSection}>
      <div className={styles.quote}>
        <blockquote>{BLOG_DETAIL_CONFIG.quote.text}</blockquote>
        {BLOG_DETAIL_CONFIG.quote.showAuthor && (
          <div className={styles.quoteAuthor}>
            <img
              src={BLOG_DETAIL_CONFIG.placeholders.author}
              alt="Quote author"
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className={styles.contentSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="row">
              <div className="col-12 col-lg-8">
                {renderExcerpt()}
                {renderMainContent()}
                {renderQuoteSection()}
              </div>

              {/* Sidebar */}
              <div className="col-12 col-lg-4">
                <div className={styles.sidebar}>
                  <div className={styles.sidebarCard}>
                    <h3>About This Post</h3>
                    <p>
                      Published on {new Date(post.date).toLocaleDateString()}
                    </p>
                    <p>
                      Reading time:{" "}
                      {calculateReadingTime(post.content?.rendered)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
