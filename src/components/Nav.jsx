import { NavLink } from 'react-router-dom';
import styles from './Nav.css';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <NavLink
        activeClassName={styles.active}
        className={styles.illustration}
        exact
        to="/illustration"
      >
        Illustration
      </NavLink>
      <NavLink
        activeClassName={styles.active}
        className={styles.design}
        exact
        to="/surface-design"
      >
        Surface Design
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
      <NavLink
        activeClassName={styles.active}
        className={styles.dev}
        exact
        to="/dev"
      >
        Development
      </NavLink>
    </div>
  );
}
