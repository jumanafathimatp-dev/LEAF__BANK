import { LEAVES } from './leaves.js';

export const SCAN_STEPS = [
  'Scanning your leaf...',
  'Checking leaf patterns...',
  'Identifying leaf type...',
  'Leaf identity confirmed.',
];

export const SCAN_STEP_MS = 750;

// Demo identification: the "database" is the fixed list of leaf types.
// We pick one stably from the uploaded image details so that rescanning
// the same image gives the same result. This is intentionally NOT real AI.
export function identifyLeaf(image) {
  const source = `${image.name}:${image.size}`;
  let hash = 0;
  for (let i = 0; i < source.length; i += 1) {
    hash = (hash * 31 + source.charCodeAt(i)) >>> 0;
  }
  return LEAVES[hash % LEAVES.length];
}