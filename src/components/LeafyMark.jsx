import { useId } from 'react';

export default function LeafyMark({ size = 34, className = '' }) {
  const leafGrad = useId();
  const veinGrad = useId();

  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id={leafGrad} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#1d5c39" />
          <stop offset="0.55" stopColor="#2f8f4f" />
          <stop offset="1" stopColor="#3ead63" />
        </linearGradient>
        <linearGradient id={veinGrad} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#eafff2" stopOpacity="0.9" />
          <stop offset="1" stopColor="#eafff2" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <path
        d="M13 42 C7 30 14 14 37 10 C32 21 26 32 13 42 Z"
        fill={`url(#${leafGrad})`}
      />
      <path
        d="M13 42 C16 30 22 19 35 12"
        fill="none"
        stroke={`url(#${veinGrad})`}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M32 24 C34 20 36 16 37 12"
        fill="none"
        stroke="#eafff2"
        strokeOpacity="0.35"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M13 42 C13 45 12 46 9 47"
        fill="none"
        stroke="#d9a431"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}