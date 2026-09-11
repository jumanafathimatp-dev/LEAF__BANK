import { useEffect } from 'react';

export default function Toast({ kind, message, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 3400);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className={`toast toast--${kind}`} role="status">
      {message}
    </div>
  );
}