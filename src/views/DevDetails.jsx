import { useParams } from 'react-router-dom';
import { devData } from '../components/DevData';

export default function DevDetails() {
  const { id } = useParams();

    const project = devData.filter(dev => dev.id === id)[0];

    console.log(project);

  return (
    <div>
      <p>DevDetails for {id}</p>
      <p>{project.title}</p>
    </div>
  );
}
