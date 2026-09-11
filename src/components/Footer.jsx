import LeafyLogo from './LeafyLogo.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <LeafyLogo />
        <p className="footer-note">
          LEAFY is completely fictional. It is not a bank. Please do not try to
          buy chai with a mango leaf.
        </p>
        <p className="footer-made">Made for TinkerHub Useless Projects</p>
      </div>
    </footer>
  );
}