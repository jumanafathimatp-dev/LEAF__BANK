import { LEAVES } from '../data/leaves.js';
import LeafCard from './LeafCard.jsx';

export default function LeafCollection({ collection }) {
  return (
    <section className="collection">
      <div className="section-head">
        <h2>My Leaf Collection</h2>
        <p>Holdings by leaf type</p>
      </div>
      <div className="collection-grid">
        {LEAVES.map((leaf) => (
          <LeafCard key={leaf.id} leaf={leaf} quantity={collection[leaf.id] ?? 0} />
        ))}
      </div>
    </section>
  );
}