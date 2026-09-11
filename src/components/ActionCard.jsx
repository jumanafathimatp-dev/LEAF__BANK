import { Link } from 'react-router-dom';

export default function ActionCard({ to, title, description, icon, accent }) {
  return (
    <Link className={`action-card action-card--${accent}`} to={to}>
      <span className="action-icon">{icon}</span>
      <span className="action-body">
        <span className="action-title">{title}</span>
        <span className="action-desc">{description}</span>
      </span>
      <span className="action-arrow" aria-hidden="true">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </span>
    </Link>
  );
}