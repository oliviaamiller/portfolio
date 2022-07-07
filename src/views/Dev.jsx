import styles from './Dev.css';
import booty from '../assets/booty.png';
import cooks from '../assets/cooksbooks.png';
import duet from '../assets/duet.png';
import sun from '../assets/sun.png';

export default function Dev() {
  return (
    <>
      <section className={styles.devContainer}>
        <div className={styles.booty}>
          <img src={booty} />
        </div>
        <div className={styles.cooks}>
          <img src={cooks} />
        </div>
        <div className={styles.duet}>
          <img src={duet} />
        </div>
        <div className={styles.sun}>
          <img src={sun} />
        </div>
      </section>
    </>
  );
}
