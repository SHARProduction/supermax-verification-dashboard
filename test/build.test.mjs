import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';
test('dashboard shows evidence-bound totals',async()=>{const html=await readFile(new URL('../docs/index.html',import.meta.url),'utf8');assert.match(html,/combined verified/);assert.match(html,/Historical aggregate 1503 is excluded/);assert.match(html,/SHAR Production/);});
