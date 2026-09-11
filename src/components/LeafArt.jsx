function vein(color) {
  return {
    stroke: '#eafff2',
    strokeOpacity: 0.6,
    strokeWidth: 2,
    fill: 'none',
    strokeLinecap: 'round',
  };
}

function midrib(color, pathData) {
  return <path d={pathData} {...vein(color)} strokeWidth={3} />;
}

function shapes(color) {
  return {
    coriander: (
      <>
        <path
          d="M54 74 C44 72 40 66 42 58 C38 60 32 58 32 52 C32 46 38 42 44 42 C40 36 44 32 50 32 C52 26 60 26 64 30 C70 26 78 30 80 36 C86 34 92 38 92 44 C92 50 88 54 84 56 C86 62 84 68 78 72 C70 78 60 80 54 74 Z"
          fill={color}
        />
        {midrib(color, 'M52 32 C56 48 62 62 64 76')}
      </>
    ),
    mint: (
      <>
        <path
          d="M60 16 C66 22 70 30 72 40 C74 34 80 30 84 36 C86 46 84 58 80 66 C84 72 82 82 76 84 C72 90 66 94 60 96 C54 94 48 90 44 84 C38 82 36 72 40 66 C36 58 34 46 36 36 C40 30 46 34 48 40 C50 30 54 22 60 16 Z"
          fill={color}
        />
        {midrib(color, 'M60 20 C58 44 58 68 60 94')}
        <path d="M40 66 L52 62 M80 66 L68 62 M44 84 L56 70" {...vein(color)} />
      </>
    ),
    mango: (
      <>
        <path
          d="M88 10 C72 20 56 38 46 58 C38 74 42 90 56 100 C68 108 86 102 92 84 C97 68 96 30 88 10 Z"
          fill={color}
        />
        {midrib(color, 'M88 12 C78 40 70 66 54 98')}
      </>
    ),
    guava: (
      <>
        <path
          d="M60 14 C82 18 98 40 96 62 C94 84 76 102 60 103 C44 102 26 84 24 62 C22 40 40 18 60 14 Z"
          fill={color}
        />
        {midrib(color, 'M60 16 C60 44 60 72 60 101')}
        <path
          d="M34 46 L60 44 M30 62 L60 60 M34 78 L60 74 M40 92 L56 84 M86 46 L60 44 M90 62 L60 60 M86 78 L60 74 M80 92 L64 84"
          {...vein(color)}
        />
      </>
    ),
    neem: (
      <>
        <path
          d="M22 24 C40 30 60 40 74 54 C86 64 96 76 102 88"
          stroke={color}
          strokeOpacity={0.9}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        {[
          [36, 32, -52],
          [50, 42, -58],
          [63, 56, -62],
          [76, 70, -64],
          [42, 36, 54],
          [56, 50, 58],
          [70, 64, 60],
          [84, 78, 62],
        ].map(([x, y, rotation]) => (
          <path
            key={`${x}-${y}-${rotation}`}
            transform={`translate(${x} ${y}) rotate(${rotation})`}
            d="M0 -17 C10 -15 14 -5 13 5 C12 13 6 18 0 18 C-6 18 -12 13 -13 5 C-14 -5 -10 -15 0 -17 Z"
            fill={color}
          />
        ))}
      </>
    ),
  };
}

export default function LeafArt({ type = 'coriander', color = '#2f8f4f', size = 80, className = '' }) {
  const art = shapes(color);
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      {art[type] ?? art.coriander}
    </svg>
  );
}