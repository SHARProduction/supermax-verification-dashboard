import { copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const sourceRoot = process.argv[2];
if (!sourceRoot) throw new Error('Usage: node refresh-evidence.mjs <supermax-root>');

await Promise.all([
  copyFile(resolve(sourceRoot, 'PROGRAM_METRICS.json'), 'data/PROGRAM_METRICS.json'),
  copyFile(resolve(sourceRoot, 'BASELINE_ACCEPTANCE_RECEIPTS.json'), 'data/BASELINE_ACCEPTANCE_RECEIPTS.json'),
]);
console.log('Evidence snapshot refreshed from the supplied SUPERMAX root.');
