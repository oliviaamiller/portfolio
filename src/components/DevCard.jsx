import { Link } from 'react-router-dom';
import styles from '../views/Dev.css';

export default function DevCard({ project }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <Link to={`/dev/${project.id}`}>
          <img className={styles.cardImg} src={project.img} />
        </Link>
      </div>
    </>
  );
}
