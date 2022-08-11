import { useParams } from 'react-router-dom';
import { devData } from '../components/DevData';
import DevDetailImages from '../components/DevDetailImages';
import styles from './Dev.css';

export default function DevDetails() {
  const { id } = useParams();

    const project = devData.filter(dev => dev.id === id)[0];

    console.log(project);

  return (
    <section className={styles.detailContainer}>
      <div className={styles.detailImgs}>
    
          {project.imgArr.map((images, i) => (
            <DevDetailImages key={`${project.imgArr} + ${i}`} images={images} />
          ))}

      </div>
      <div className={styles.detailInfo}>
        <p>{project.title}</p>
        <a href={project.git} target="_blank">
          github
        </a>
        <a href={project.deployed} target="_blank">
          deployed
        </a>
        <p>Tech Stack: {project.stack}</p>
        <p>{project.about}</p>
      </div>
    </section>
  );
}
