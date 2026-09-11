import { useEffect, useState } from 'react';
import { SCAN_STEPS, SCAN_STEP_MS, identifyLeaf } from '../data/scanner.js';
import { useWallet } from '../state/WalletContext.jsx';
import UploadArea from '../components/UploadArea.jsx';
import ScanProgress from '../components/ScanProgress.jsx';
import ScanResult from '../components/ScanResult.jsx';
import ScanSuccess from '../components/ScanSuccess.jsx';
import LeafArt from '../components/LeafArt.jsx';

export default function Scan() {
  const { collection, available, addLeaf } = useWallet();
  const [phase, setPhase] = useState('upload');
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(
    () => () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    },
    [previewUrl]
  );

  function handleFile(file) {
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    setResult(null);
    setStep(0);
    setPhase('scanning');
  }

  useEffect(() => {
    if (phase !== 'scanning') return;
    if (step < SCAN_STEPS.length) {
      const timer = setTimeout(() => setStep((s) => s + 1), SCAN_STEP_MS);
      return () => clearTimeout(timer);
    }
    setResult(identifyLeaf(image));
    setPhase('result');
  }, [phase, step, image]);

  function handleAdd() {
    addLeaf(result.id);
    setPhase('added');
  }

  function reset() {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setImage(null);
    setPreviewUrl(null);
    setResult(null);
    setStep(0);
    setPhase('upload');
  }

  return (
    <section className="scan">
      <div className="page-decor" aria-hidden="true">
        <LeafArt type="coriander" color="#3ead63" size={90} className="decor-leaf decor-leaf--1" />
        <LeafArt type="mango" color="#d9a431" size={60} className="decor-leaf decor-leaf--2" />
      </div>

      <div className="container scan-layout">
        <header className="page-head">
          <span className="eyebrow">Leaf Scanner</span>
          <h1 className="page-title">Scan Your Leaf</h1>
          <p className="page-sub">Turn a real leaf into Leaf Money.</p>
        </header>

        {phase === 'upload' && (
          <div className="scan-stage" key="upload">
            <UploadArea onFile={handleFile} />
          </div>
        )}

        {phase === 'scanning' && (
          <div className="scan-stage" key="scanning">
            <ScanProgress imageUrl={previewUrl} currentStep={step} />
          </div>
        )}

        {phase === 'result' && (
          <div className="scan-stage" key="result">
            <ScanResult
              leaf={result}
              imageUrl={previewUrl}
              held={collection[result.id] ?? 0}
              onAdd={handleAdd}
              onReset={reset}
            />
          </div>
        )}

        {phase === 'added' && (
          <div className="scan-stage" key="added">
            <ScanSuccess
              leaf={result}
              quantity={collection[result.id] ?? 0}
              balance={available}
              onReset={reset}
            />
          </div>
        )}
      </div>
    </section>
  );
}