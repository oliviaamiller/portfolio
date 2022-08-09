import DevCard from '../components/DevCard';
import { devData } from '../components/DevData';

export default function Dev() {
  return (
    <div>
      {devData.map((project, i) => (
        <DevCard key={`${project.id} + ${i}`} project={project} />
      ))}
    </div>
  );
}
