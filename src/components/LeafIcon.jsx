export default function LeafIcon({ color = '#2f8f4f', size = 40, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M40 6C22 6 8 18 8 34c0 3 .5 5.5 1.5 7.5C5 36 4 30 6 24 8.5 16.5 16 10 26 8c5-1 11 .5 14.5-.5z"
        fill={color}
      />
      <path
        d="M8 34c6-8 14-14 24-20"
        stroke="#eafff2"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}