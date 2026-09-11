import { useWallet } from '../state/WalletContext.jsx';
import WalletCard from '../components/WalletCard.jsx';
import ActionCard from '../components/ActionCard.jsx';
import LeafCollection from '../components/LeafCollection.jsx';
import LeafArt from '../components/LeafArt.jsx';
import EconomyNews from '../components/EconomyNews.jsx';
import { NEWS } from '../data/news.js';

const scannerIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const marketIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export default function Economy() {
  const { collection, available, value, spent, leavesOwned } = useWallet();

  return (
    <section className="economy">
      <div className="page-decor" aria-hidden="true">
        <LeafArt type="mango" color="#3ead63" size={96} className="decor-leaf decor-leaf--1" />
        <LeafArt type="neem" color="#728c3a" size={64} className="decor-leaf decor-leaf--2" />
        <LeafArt type="guava" color="#d9a431" size={72} className="decor-leaf decor-leaf--3" />
      </div>

      <div className="container">
        <header className="page-head">
          <span className="eyebrow">Dashboard</span>
          <h1 className="page-title">Leaf Economy</h1>
          <p className="page-sub">
            A fully serious account overview for a purely imaginary currency.
          </p>
        </header>

        <div className="economy-grid">
          <div className="economy-main">
            <WalletCard
              balance={available}
              value={value}
              spent={spent}
              leaves={leavesOwned}
            />

            <div className="action-row">
              <ActionCard
                to="/scan"
                title="Scan a Leaf"
                description="Add a new leaf to your wallet"
                icon={scannerIcon}
                accent="leaf"
              />
              <ActionCard
                to="/market"
                title="Leaf Market"
                description="Spend Leaf Money on useless things"
                icon={marketIcon}
                accent="gold"
              />
            </div>
          </div>

          <div className="economy-side">
            <EconomyNews items={NEWS} />
          </div>
        </div>

        <LeafCollection collection={collection} />
      </div>
    </section>
  );
}