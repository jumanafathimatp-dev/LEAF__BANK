import { SCAN_STEPS } from '../data/scanner.js';

const checkIcon = (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function ScanProgress({ imageUrl, currentStep }) {
  return (
    <div className="scan-progress">
      <div className="scan-preview">
        <img src={imageUrl} alt="Your leaf being scanned" />
        <span className="scan-line" aria-hidden="true" />
      </div>

      <ol className="scan-steps">
        {SCAN_STEPS.map((label, index) => (
          <li
            key={label}
            className={`scan-step${index < currentStep ? ' scan-step--done' : ''}${
              index === currentStep ? ' scan-step--current' : ''
            }`}
          >
            <span className="scan-step-indicator" aria-hidden="true">
              {index < currentStep ? checkIcon : null}
            </span>
            {label}
          </li>
        ))}
      </ol>
    </div>
  );
}