import { Link } from 'react-router-dom';
import LeafIcon from './LeafIcon.jsx';

export default function PageStub({ title, message }) {
  return (
    <section className="stub">
      <div className="container stub-inner">
        <span className="stub-leaf">
          <LeafIcon color="#2f8f4f" size={64} />
        </span>
        <h1 className="stub-title">{title}</h1>
        <p className="stub-text">{message}</p>
        <Link className="btn btn-outline" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}