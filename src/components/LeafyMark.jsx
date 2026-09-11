import { useId } from 'react';

export default function LeafyMark({ size = 34, className = '' }) {
  const coinGrad = useId();
  const leafGrad = useId();

  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <radialGradient id={coinGrad} cx="0.35" cy="0.32" r="0.85">
          <stop offset="0" stopColor="#f8dc86" />
          <stop offset="0.42" stopColor="#e7b653" />
          <stop offset="0.75" stopColor="#c9992f" />
          <stop offset="1" stopColor="#a8791d" />
        </radialGradient>
        <linearGradient id={leafGrad} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#1d5c39" />
          <stop offset="0.55" stopColor="#2f8f4f" />
          <stop offset="1" stopColor="#3ead63" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill={`url(#${coinGrad})`} />
      <circle cx="32" cy="32" r="30" fill="none" stroke="#a97d19" strokeWidth="1.6" opacity="0.9" />
      <circle cx="32" cy="32" r="26.6" fill="none" stroke="#8a6414" strokeWidth="1.4" opacity="0.55" />
      <path d="M15 19 A 21 21 0 0 1 30 12" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M28 44 C23 35 27 24 46 21 C40 29 35 39 28 44 Z"
        fill={`url(#${leafGrad})`}
      />
      <path
        d="M28 44 C31 38 35 31 42 25"
        fill="none"
        stroke="#14402a"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
      <path
        d="M36 30 C39 27 42 24 44 22"
        fill="none"
        stroke="#eafff2"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}