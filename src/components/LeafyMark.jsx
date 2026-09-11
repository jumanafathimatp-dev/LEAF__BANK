import { useId } from 'react';

export default function LeafyMark({ size = 34, className = '' }) {
  const dark = useId();
  const light = useId();

  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={dark} x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0" stopColor="#164f2f" />
          <stop offset="1" stopColor="#25683f" />
        </linearGradient>
        <linearGradient id={light} x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0" stopColor="#3aa967" />
          <stop offset="1" stopColor="#58d688" />
        </linearGradient>
      </defs>
      <path
        d="M32 55 C24 55 13 47 12 36 C11 22 19 8 32 4 C33 20 33 40 32 55 Z"
        fill={`url(#${dark})`}
      />
      <path
        d="M32 55 C33 40 33 20 32 4 C45 8 51 22 50 36 C49 47 40 55 32 55 Z"
        fill={`url(#${light})`}
      />
      <path d="M32 55 C33 40 33 20 32 4" fill="none" stroke="#0e3a22" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M33 20 C38 22 43 27 47 33" fill="none" stroke="#0e3a22" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.35" />
      <path d="M33 32 C38 36 42 40 44 44" fill="none" stroke="#0e3a22" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.35" />
      <path d="M32.5 22 C27 24 21 30 16 36" fill="none" stroke="#0e3a22" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.35" />
      <path d="M33 34 C27 38 22 42 18 44" fill="none" stroke="#0e3a22" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.35" />
      <path d="M32 55 C30 59 28 61 25 64" fill="none" stroke="#2b7a46" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}