import LeafIcon from './LeafIcon.jsx';

export default function EconomyNews({ items }) {
  return (
    <section className="news">
      <div className="section-head">
        <h2>Leaf Economy News</h2>
        <span className="news-badge">Live · probably</span>
      </div>
      <ul className="news-list">
        {items.map((item) => (
          <li className="news-item" key={item.id}>
            <LeafIcon color="#2f8f4f" size={16} />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}