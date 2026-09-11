import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LEAVES } from '../data/leaves.js';

const STORAGE_KEY = 'leafy.wallet.v2';
const LEGACY_KEY = 'leafy.wallet.v1';

const SEED = {
  coriander: 3,
  mint: 2,
  mango: 1,
  guava: 0,
  neem: 0,
};

function sumValue(collection) {
  return LEAVES.reduce(
    (sum, leaf) => sum + (collection[leaf.id] ?? 0) * leaf.value,
    0
  );
}

function loadInitialState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      return {
        collection: { ...SEED, ...(data.collection ?? {}) },
        purchases: Array.isArray(data.purchases) ? data.purchases : [],
      };
    }
    const legacyRaw = localStorage.getItem(LEGACY_KEY);
    if (legacyRaw) {
      localStorage.removeItem(LEGACY_KEY);
      return {
        collection: { ...SEED, ...JSON.parse(legacyRaw) },
        purchases: [],
      };
    }
  } catch {
    // corrupted or unavailable storage — fall back to the seed wallet
  }
  return { collection: { ...SEED }, purchases: [] };
}

const WalletContext = createContext(null);

export function WalletProvider({ children }) {
  const [wallet, setWallet] = useState(loadInitialState);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wallet));
    } catch {
      // storage unavailable — the wallet still works for this session
    }
  }, [wallet]);

  const addLeaf = (leafId, quantity = 1) => {
    setWallet((prev) => ({
      ...prev,
      collection: {
        ...prev.collection,
        [leafId]: (prev.collection[leafId] ?? 0) + quantity,
      },
    }));
  };

  const collection = wallet.collection;
  const purchases = wallet.purchases;

  const value = useMemo(() => sumValue(collection), [collection]);
  const spent = useMemo(
    () => purchases.reduce((total, item) => total + item.price, 0),
    [purchases]
  );
  const available = value - spent;
  const leavesOwned = useMemo(
    () => Object.values(collection).reduce((total, count) => total + (count ?? 0), 0),
    [collection]
  );

  const spend = (product) => {
    if (available < product.price) return false;
    setWallet((prev) => ({
      ...prev,
      purchases: [
        ...prev.purchases,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          at: Date.now(),
        },
      ],
    }));
    return true;
  };

  const contextValue = {
    collection,
    purchases,
    value,
    spent,
    available,
    leavesOwned,
    addLeaf,
    spend,
  };

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  return useContext(WalletContext);
}