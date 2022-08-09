import styles from './Dev.css';
import booty from '../assets/booty.png';
import cooks from '../assets/cooksbooks.png';
import duet from '../assets/duet.png';
import sun from '../assets/sun.png';
import { Link } from 'react-router-dom';

export default function Dev() {
  return (
    <>
      <section className={styles.devContainer}>
        <div className={styles.booty}>
          <Link to={`/dev/booty`}>
            <img src={booty} />
          </Link>
        </div>
        <div className={styles.cooks}>
          <Link to={`/dev/cooks`}>
            <img src={cooks} />
          </Link>
        </div>
        <div className={styles.duet}>
          <Link to={`/dev/duet`}>
            <img src={duet} />
          </Link>
        </div>
        <div className={styles.sun}>
          <Link to={`/dev/sun`}>
            <img src={sun} />
          </Link>
        </div>
      </section>
    </>
  );
}
