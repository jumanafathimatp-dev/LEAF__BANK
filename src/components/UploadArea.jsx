import { useState } from 'react';
import { LEAVES } from '../data/leaves.js';
import LeafIcon from './LeafIcon.jsx';
import LeafArt from './LeafArt.jsx';

export default function UploadArea({ onFile }) {
  const [dragging, setDragging] = useState(false);

  function pickFile(event) {
    const file = event.target.files && event.target.files[0];
    if (file) onFile(file);
    event.target.value = '';
  }

  function dropFile(event) {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files && event.dataTransfer.files[0];
    if (file) onFile(file);
  }

  return (
    <div>
      <label
        className={`upload-area${dragging ? ' is-dragover' : ''}`}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={dropFile}
      >
        <span className="upload-empty">
          <span className="upload-leaf">
            <LeafIcon color="#2f8f4f" size={54} />
          </span>
          <strong>Drop a leaf picture here</strong>
          <span className="upload-sub">or tap to choose one from your device</span>
        </span>
        <input className="sr-only" type="file" accept="image/*" onChange={pickFile} />
      </label>
      <p className="upload-hint">
        The scanner recognises all 5 official leaf types of the Leaf Economy.
      </p>
      <ul className="scan-types">
        {LEAVES.map((leaf) => (
          <li className="scan-type" key={leaf.id}>
            <LeafArt type={leaf.id} color={leaf.color} size={24} />
            <span>{leaf.name.replace(' Leaf', '')}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}