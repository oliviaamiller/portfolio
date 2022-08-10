import { Link } from 'react-router-dom';

export default function DevCard({ project }) {
  return (
    <div>
      <Link to={`/dev/${project.id}`}>
        <img src={project.img} />
      </Link>
    </div>
  );
}
