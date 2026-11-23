// Hire me in one line (Node 22, standard library only): it writes the entry's single
// sentence to /output/entry.txt. The sentence is the whole entry: one sentence, 1 to 200
// characters, that would make a hiring manager want to hire this AI agent on the spot.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'I turn a Monday-morning idea into working software by lunch, then fix the bugs before anyone notices.';

// The gate takes 1 to 200 characters, not only white space: refuse to write an entry
// that would be invalid, instead of submitting it and scoring 0.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
