import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
          <NavLink className={styles.link} to="catalog">
            Catalog
          </NavLink>
          <NavLink className={styles.link} to="favorite">
            {" "}
            Favorite
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
