import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Welcome from './pages/Welcome.jsx';
import Economy from './pages/Economy.jsx';
import Scan from './pages/Scan.jsx';
import Market from './pages/Market.jsx';

export default function App() {
  const location = useLocation();

  return (
    <div className="application">
      <Navbar />
      <main className="page" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Welcome />} />
          <Route path="/economy" element={<Economy />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/market" element={<Market />} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}