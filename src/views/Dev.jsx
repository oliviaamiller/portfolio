import DevCard from '../components/DevCard';
import { devData } from '../components/DevData';
import styles from './Dev.css';

export default function Dev() {
  return (
    <div className={styles.devContainer}>
      {devData.map((project, i) => (
        <DevCard key={`${project.id} + ${i}`} project={project} />
      ))}
    </div>
  );
}
