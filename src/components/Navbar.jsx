import { NavLink } from 'react-router-dom';
import LeafyLogo from './LeafyLogo.jsx';

const links = [
  { to: '/', label: 'Home' },
  { to: '/economy', label: 'Economy' },
  { to: '/scan', label: 'Scan' },
  { to: '/market', label: 'Market' },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav">
        <NavLink className="brand" to="/" end aria-label="LEAFY home">
          <LeafyLogo />
        </NavLink>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}