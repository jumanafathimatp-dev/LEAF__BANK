import { useMemo, useState } from 'react';
import { useWallet } from '../state/WalletContext.jsx';
import { PRODUCTS } from '../data/market.js';
import ProductCard from '../components/ProductCard.jsx';
import PlantImage from '../components/PlantImage.jsx';
import ArtTile from '../components/ArtTile.jsx';
import LeafArt from '../components/LeafArt.jsx';
import Toast from '../components/Toast.jsx';

export default function Market() {
  const { available, leavesOwned, purchases, spend } = useWallet();
  const [toast, setToast] = useState(null);

  function handleBuy(product) {
    const ok = spend(product);
    setToast({
      id: Date.now(),
      kind: ok ? 'success' : 'error',
      message: ok
        ? `Purchase successful. Congratulations. You now own a ${product.name}.`
        : 'Insufficient Leaf Money. Your financial empire needs more leaves.',
    });
  }

  const owned = useMemo(() => {
    const counts = new Map();
    purchases.forEach((item) =>
      counts.set(item.id, (counts.get(item.id) ?? 0) + 1)
    );
    return [...counts.entries()];
  }, [purchases]);

  return (
    <section className="market">
      <div className="page-decor" aria-hidden="true">
        <LeafArt type="neem" color="#c08045" size={88} className="decor-leaf decor-leaf--1" />
        <LeafArt type="mint" color="#7fa8c9" size={58} className="decor-leaf decor-leaf--2" />
        <LeafArt type="coriander" color="#f1b3c0" size={70} className="decor-leaf decor-leaf--3" />
      </div>

      <div className="container">
        <header className="page-head">
          <span className="eyebrow">Leaf Market</span>
          <h1 className="page-title">Leaf Market</h1>
          <p className="page-sub">
            Spend your hard-earned leaves on things you absolutely don't need.
          </p>
        </header>

        <div className="market-wallet">
          <div>
            <span className="market-wallet-label">Available balance</span>
            <p className="market-balance">₹{available}</p>
          </div>
          <div className="market-wallet-stats">
            <div className="market-stat">
              <strong>{leavesOwned}</strong>
              <span>leaves held</span>
            </div>
            <div className="market-stat">
              <strong>{purchases.length}</strong>
              <span>useless things</span>
            </div>
          </div>
        </div>

        <p className="market-note">
          All sales are final. There is no return address. There has never been
          one.
        </p>

        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              affordable={available >= product.price}
              onBuy={handleBuy}
            />
          ))}
        </div>

        <section className="owned">
          <div className="section-head">
            <h2>Your Useless Collection</h2>
            <p>
              {purchases.length} item{purchases.length === 1 ? '' : 's'} owned
            </p>
          </div>
          {owned.length === 0 ? (
            <p className="owned-empty">
              Nothing here yet. The marketplace is open, the inventory is
              magnificent, and the leaves are burning a hole in your wallet.
            </p>
          ) : (
            <ul className="owned-grid">
              {owned.map(([id, count]) => {
                const product = PRODUCTS.find((item) => item.id === id);
                return (
                  <li className="owned-item" key={id}>
                    <span className="owned-thumb">
                      <PlantImage
                        src={product.image}
                        alt={product.name}
                        className="owned-img"
                        fallback={<ArtTile title={product.name} />}
                      />
                    </span>
                    <span className="owned-name">{product.name}</span>
                    <span className="owned-count">×{count}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>

      {toast && (
        <Toast
          key={toast.id}
          kind={toast.kind}
          message={toast.message}
          onDone={() => setToast(null)}
        />
      )}
    </section>
  );
}