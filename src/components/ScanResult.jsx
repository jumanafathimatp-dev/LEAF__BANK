import PlantImage from './PlantImage.jsx';
import LeafArt from './LeafArt.jsx';

export default function ScanResult({ leaf, imageUrl, held, onAdd, onReset }) {
  return (
    <div className="result-card">
      <div className="result-head">
        <figure className="result-fig">
          <span className="result-leaf-badge">
            <PlantImage
              src={leaf.image}
              alt={`Reference photo of a ${leaf.name}`}
              className="result-leaf-photo"
              fallback={<LeafArt type={leaf.id} color={leaf.color} size={54} />}
            />
          </span>
          <figcaption>reference</figcaption>
        </figure>
        {imageUrl && (
          <figure className="result-fig">
            <img className="result-thumb" src={imageUrl} alt={`Your scanned ${leaf.name}`} />
            <figcaption>your leaf</figcaption>
          </figure>
        )}
      </div>

      <h2>Leaf Identified</h2>

      <div className="result-rows">
        <div className="result-row">
          <span>Leaf Type</span>
          <strong>{leaf.name}</strong>
        </div>
        <div className="result-row">
          <span>Leaf Money Value</span>
          <strong className="result-value">₹{leaf.value}</strong>
        </div>
        <div className="result-row">
          <span>Currently held</span>
          <strong>×{held}</strong>
        </div>
      </div>

      <button className="btn btn-primary btn-lg btn-block" onClick={onAdd}>
        Add to Wallet
      </button>

      <p className="result-note">
        Demo identification — this is not a real AI model.
      </p>
      <button className="text-link" onClick={onReset}>
        Scan a different leaf
      </button>
    </div>
  );
}