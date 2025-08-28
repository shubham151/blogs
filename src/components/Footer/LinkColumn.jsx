import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const LinkColumn = ({ data, columnKey }) => {
  return (
    <div className="col-6 col-md-3 col-lg-2 mb-4 mb-lg-0">
      <h3 className={styles.columnTitle}>{data.title}</h3>
      <ul className={styles.linkList}>
        {data.links.map((link, index) => (
          <li key={`${columnKey}-${index}`} className={styles.linkItem}>
            <Link to={link.href} className={styles.footerLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkColumn;
