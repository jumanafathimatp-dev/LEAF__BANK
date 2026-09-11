import { Link } from 'react-router-dom';
import PlantImage from './PlantImage.jsx';
import LeafArt from './LeafArt.jsx';

export default function ScanSuccess({ leaf, quantity, balance, onReset }) {
  return (
    <div className="success-card">
      <span className="success-leaf">
        <PlantImage
          src={leaf.image}
          alt={`A ${leaf.name}`}
          className="success-leaf-photo"
          fallback={<LeafArt type={leaf.id} color={leaf.color} size={54} />}
        />
      </span>

      <h2>Leaf added!</h2>
      <p className="success-message">
        ₹{leaf.value} added to your Leaf Wallet. Your financial situation has
        improved significantly. 🍃
      </p>

      <div className="success-stats">
        <div className="success-stat">
          <span>Wallet balance</span>
          <strong>₹{balance}</strong>
        </div>
        <div className="success-stat">
          <span>{leaf.name} held</span>
          <strong>×{quantity}</strong>
        </div>
      </div>

      <div className="btn-row">
        <button className="btn btn-outline" onClick={onReset}>
          Scan another leaf
        </button>
        <Link className="btn btn-primary" to="/economy">
          View Leaf Wallet
        </Link>
      </div>
    </div>
  );
}