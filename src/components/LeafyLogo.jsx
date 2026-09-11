import LeafyMark from './LeafyMark.jsx';

export default function LeafyLogo({ variant = '' }) {
  const className = variant ? `brand brand--${variant}` : 'brand';
  return (
    <span className={className}>
      <LeafyMark size={48} />
      LEAFY
    </span>
  );
}