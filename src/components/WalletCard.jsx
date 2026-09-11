import LeafIcon from './LeafIcon.jsx';

export default function WalletCard({ balance, value, spent, leaves }) {
  return (
    <article className="wallet-card">
      <LeafIcon className="wallet-leaf wallet-leaf--1" color="#ffffff" size={130} />
      <LeafIcon className="wallet-leaf wallet-leaf--2" color="#ffffff" size={72} />
      <div className="wallet-card-head">
        <span className="wallet-label">Leaf Wallet</span>
        <span className="rate-pill">fictional</span>
      </div>
      <p className="wallet-balance">₹{balance}</p>
      <p className="wallet-sub">Your available fictional wealth.</p>
      <div className="wallet-stats">
        <div className="wallet-stat">
          <strong>{leaves}</strong>
          <span>leaves held</span>
        </div>
        <div className="wallet-stat">
          <strong>₹{value}</strong>
          <span>total value</span>
        </div>
        <div className="wallet-stat">
          <strong>₹{spent}</strong>
          <span>spent so far</span>
        </div>
      </div>
      <span className="wallet-chip">Leaf Money · not a real bank</span>
    </article>
  );
}