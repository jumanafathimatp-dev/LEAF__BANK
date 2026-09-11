import PlantImage from './PlantImage.jsx';
import ArtTile from './ArtTile.jsx';

export default function ProductCard({ product, affordable, onBuy }) {
  return (
    <article className="product-card">
      <div className="product-media">
        <PlantImage
          src={product.image}
          alt={product.name}
          className="product-img"
          fallback={<ArtTile title={product.name} />}
        />
        <span className="product-price">₹{product.price}</span>
      </div>
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <button
          className="btn btn-buy"
          disabled={!affordable}
          onClick={() => onBuy(product)}
        >
          {affordable ? 'Buy it' : 'Need more leaves'}
        </button>
      </div>
    </article>
  );
}