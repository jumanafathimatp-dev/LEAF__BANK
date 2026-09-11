import { Link } from 'react-router-dom';
import LeafIcon from '../components/LeafIcon.jsx';
import PlantImage from '../components/PlantImage.jsx';
import ArtTile from '../components/ArtTile.jsx';
import { LEAVES } from '../data/leaves.js';
import { PRODUCTS } from '../data/market.js';

const arrowIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Welcome() {
  return (
    <>
      <section className="hero">
        <div className="hero-decor" aria-hidden="true">
          <LeafIcon className="float-leaf float-leaf--1" color="#2f8f4f" size={46} />
          <LeafIcon className="float-leaf float-leaf--2" color="#5a8f3c" size={30} />
          <LeafIcon className="float-leaf float-leaf--3" color="#3ead63" size={38} />
          <LeafIcon className="float-leaf float-leaf--4" color="#728c3a" size={24} />
        </div>

        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">The Leaf Economy</span>
            <h1 className="hero-title">Remember when leaves were money?</h1>
            <p className="hero-sub">
              Before crypto, before cards, there were leaves. LEAFY is a
              fictional currency for the only economy that ever felt alive —
              plants.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" to="/economy">
                Enter Leaf Economy
                {arrowIcon}
              </Link>
              <a className="btn btn-outline btn-lg" href="#how-it-works">
                How it works
              </a>
            </div>
            <p className="hero-note">
              No real rupees are involved. Your savings are safe. Probably.
            </p>
          </div>

          <aside className="hero-card" aria-label="Leaf Money currency rates">
            <div className="hero-card-head">
              <span className="hero-card-title">Currency rates · today</span>
              <span className="rate-pill">Leaf Money</span>
            </div>
            <ul className="rate-list">
              {LEAVES.map((leaf) => (
                <li className="rate-row" key={leaf.id}>
                  <span className="rate-leaf">
                    <LeafIcon color={leaf.color} size={30} />
                  </span>
                  <span className="rate-name">{leaf.name}</span>
                  <span className="rate-value">₹{leaf.value}</span>
                </li>
              ))}
            </ul>
            <p className="hero-card-foot">
              Every leaf of the same type is worth the same. Always.
            </p>
          </aside>
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <h2 className="section-title">The Leaf Economy, explained</h2>
          <p className="section-sub">A simple system with three simple rules.</p>

          <div className="cards">
            <article className="card">
              <span className="card-icon" aria-hidden="true">
                <LeafIcon color="#2f8f4f" size={26} />
              </span>
              <h3>Leaves are money</h3>
              <p>
                Your pocket lint means nothing here. Leaves are the only
                currency the Leaf Economy accepts.
              </p>
            </article>

            <article className="card">
              <span className="card-icon" aria-hidden="true">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2f8f4f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h8.4A2 2 0 0 0 17 18l-5-9V3" />
                </svg>
              </span>
              <h3>Every leaf has a set value</h3>
              <p>
                A mint leaf is a mint leaf. No size, freshness, or condition
                taxes. The type decides the price.
              </p>
            </article>

            <article className="card">
              <span className="card-icon" aria-hidden="true">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2f8f4f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </span>
              <h3>Spend them on useless things</h3>
              <p>
                Grow a collection, fill a wallet, and buy wonderfully useless
                objects at the Leaf Market.
              </p>
            </article>
          </div>

          <div className="how-cta">
            <Link className="btn btn-primary btn-lg" to="/economy">
              Check your Leaf Wallet
            </Link>
          </div>
        </div>

        <div className="container market-preview">
          <h2 className="section-title">Best sellers at the Leaf Market</h2>
          <p className="section-sub">A curated sample of wondrous uselessness.</p>
          <div className="market-preview-grid">
            {PRODUCTS.slice(0, 3).map((product) => (
              <Link className="preview-item" to="/market" key={product.id}>
                <span className="preview-media">
                  <PlantImage
                    src={product.image}
                    alt={product.name}
                    className="preview-img"
                    fallback={<ArtTile title={product.name} />}
                  />
                </span>
                <span className="preview-info">
                  <span className="preview-name">{product.name}</span>
                  <span className="preview-price">₹{product.price}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}