import { NavLink } from 'react-router-dom';
import styles from './Nav.css';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.artContainer}>
        <NavLink
          activeClassName={styles.active}
          className={styles.art}
          exact
          to="/design"
        >
          Art and Design
        </NavLink>
      </div>
      <NavLink
        activeClassName={styles.active}
        className={styles.dev}
        exact
        to="/dev"
      >
        Development
      </NavLink>
      <div className={styles.aboutContainer}>
        <NavLink
          activeClassName={styles.active}
          className={styles.about}
          exact
          to="/about"
        >
          About
        </NavLink>
        <a
          href="mailto: oliviaoliviaolivia@gmail.com"
          className={styles.contact}
        >
          Contact
        </a>
      </div>
      <p className={styles.name}>Olivia Miller</p>
    </div>
  );
}
