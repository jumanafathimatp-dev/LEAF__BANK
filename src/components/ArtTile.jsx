import LeafIcon from './LeafIcon.jsx';

export default function ArtTile({ title, subtitle }) {
  return (
    <span className="art-tile" aria-hidden="true">
      <LeafIcon size={30} />
      <span className="art-tile-name">{title}</span>
      {subtitle ? <span className="art-tile-sub">{subtitle}</span> : null}
    </span>
  );
}