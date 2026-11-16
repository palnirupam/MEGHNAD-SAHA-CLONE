import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const output = join(root, 'dist');

await rm(output, { recursive: true, force: true });
await mkdir(output);
await Promise.all([
  cp(join(root, 'assets'), join(output, 'assets'), { recursive: true }),
  cp(join(root, 'images'), join(output, 'images'), { recursive: true }),
  cp(join(root, 'index.html'), join(output, 'index.html')),
  cp(join(root, 'msit_logo.jpg'), join(output, 'msit_logo.jpg')),
]);

console.log('Static site built in dist/');
