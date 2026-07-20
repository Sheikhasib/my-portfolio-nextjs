#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.on('SIGINT', () => { process.exit(0); });
const ask = (q) => new Promise((r) => rl.question(q, r));

function slug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getNextNumber() {
  const entries = fs.readdirSync(process.cwd(), { withFileTypes: true });
  const dirs = entries
    .filter((e) => e.isDirectory() && /^\d{2}-/.test(e.name))
    .map((e) => e.name)
    .sort();
  if (dirs.length === 0) return 1;
  const last = parseInt(dirs[dirs.length - 1].slice(0, 2), 10);
  return last + 1;
}

function specContent(name, desc, criteria, notes) {
  return [
    `# ${name}`,
    '',
    '## Description',
    desc || 'TBD',
    '',
    '## Acceptance Criteria',
    criteria || 'TBD',
    '',
    '## Technical Notes',
    notes || 'N/A',
    '',
  ].join('\n');
}

async function interactive() {
  const name = await ask('Feature name: ');
  const desc = await ask('Description: ');
  const criteria = await ask('Acceptance criteria (separate with semicolons): ');
  const notes = await ask('Technical notes (optional, press Enter to skip): ');
  return { name, content: specContent(name, desc, criteria, notes) };
}

async function fromFile(filePath) {
  const resolved = path.resolve(filePath);
  if (!fs.existsSync(resolved)) {
    console.error(`File not found: ${resolved}`);
    process.exit(1);
  }
  const content = fs.readFileSync(resolved, 'utf-8');
  const name = path.basename(resolved, path.extname(resolved));
  return { name, content };
}

async function main() {
  const args = process.argv.slice(2);
  const fileFlagIndex = args.findIndex((a) => a === '--file' || a === '-f');
  const hasFileArg = fileFlagIndex !== -1;
  const filePath = hasFileArg ? args[fileFlagIndex + 1] : args[0];

  const { name, content } = (hasFileArg || (filePath && fs.existsSync(path.resolve(filePath))))
    ? await fromFile(filePath)
    : await interactive();

  const num = getNextNumber();
  const folderName = `${String(num).padStart(2, '0')}-${slug(name)}`;
  const folderPath = path.join(process.cwd(), folderName);

  fs.mkdirSync(folderPath, { recursive: true });
  fs.writeFileSync(path.join(folderPath, 'README.md'), content, 'utf-8');

  console.log(`\nCreated ${folderName}/README.md`);
  rl.close();
}

main();
