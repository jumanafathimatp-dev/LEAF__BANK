import PlantImage from './PlantImage.jsx';
import LeafArt from './LeafArt.jsx';

export default function LeafCard({ leaf, quantity }) {
  const empty = quantity === 0;
  const subtotal = quantity * leaf.value;

  return (
    <article className={`leaf-card${empty ? ' leaf-card--empty' : ''}`}>
      <span className="leaf-card-icon">
        <PlantImage
          src={leaf.image}
          alt={leaf.name}
          className="leaf-card-photo"
          fallback={<LeafArt type={leaf.id} color={leaf.color} size={30} />}
        />
      </span>
      <div className="leaf-card-info">
        <h3>{leaf.name}</h3>
        <p>₹{leaf.value} each · value set by type only</p>
      </div>
      <div className="leaf-card-meta">
        <span className="qty">×{quantity}</span>
        <span className="subtotal">{empty ? 'none held' : `= ₹${subtotal}`}</span>
      </div>
    </article>
  );
}