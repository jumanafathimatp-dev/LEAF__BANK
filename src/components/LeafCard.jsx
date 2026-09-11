import PlantImage from './PlantImage.jsx';
import LeafArt from './LeafArt.jsx';

export default function LeafCard({ leaf, quantity }) {
  const empty = quantity === 0;
  const subtotal = quantity * leaf.value;

  return (
    <article
      className={`leaf-card${empty ? ' is-empty' : ''}`}
      style={{ '--leaf-color': leaf.color }}
    >
      <div className="leaf-card-media">
        <PlantImage
          src={leaf.image}
          alt={leaf.name}
          className="leaf-card-photo"
          fallback={<LeafArt type={leaf.id} color={leaf.color} size={96} />}
        />
        <span className="leaf-card-count">×{quantity}</span>
      </div>

      <div className="leaf-card-body">
        <span className="leaf-dot" style={{ background: leaf.color }} aria-hidden="true" />
        <h3 className="leaf-card-name">{leaf.name}</h3>
        <p className="leaf-card-value">₹{leaf.value} Leaf Money</p>
        <p className="leaf-card-qty">
          {empty ? 'Not collected yet' : `Collected: ${quantity}`}
        </p>
        {!empty && <p className="leaf-card-subtotal">= ₹{subtotal} in wallet</p>}
      </div>
    </article>
  );
}