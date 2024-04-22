import { readFile } from 'node:fs/promises';

import { marked } from 'marked';

import head from '../includes/head.mjs';
import footer from '../includes/footer.mjs';

const markdown = await readFile('./rhythm-game-prototype.md', 'utf8');

process.stdout.write(`<!doctype html><html lang="en">`);

process.stdout.write(head);

process.stdout.write(`<body>`);

process.stdout.write(`<header class="page-header">
    <a href="/">&#8592; Back to Portfolio</a>
</header>`);

process.stdout.write(`<main class="case-study">\n`);

process.stdout.write(marked.parse(markdown).toString());

process.stdout.write(`</main>\n`);

process.stdout.write(footer);

process.stdout.write(
  `<script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.0/dist/mermaid.min.js"></script>`
);

process.stdout.write('</body></html>');
