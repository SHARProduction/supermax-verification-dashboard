import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const sourceRoot = process.argv[2];
if (!sourceRoot) throw new Error('Usage: node refresh-evidence.mjs <supermax-root>');

const incoming = JSON.parse(await readFile(resolve(sourceRoot, 'PROGRAM_METRICS.json')));
const current = JSON.parse(await readFile('data/PROGRAM_METRICS.json'));
const counting = { ...current.counting_contract, ...incoming.counting_contract };
await Promise.all([
  writeFile('data/PROGRAM_METRICS.json', `${JSON.stringify({ ...current, ...incoming, counting_contract: counting }, null, 2)}\n`),
  copyFile(resolve(sourceRoot, 'BASELINE_ACCEPTANCE_RECEIPTS.json'), 'data/BASELINE_ACCEPTANCE_RECEIPTS.json'),
]);
console.log('Evidence snapshot refreshed from the supplied SUPERMAX root.');
