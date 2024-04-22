import { readFile } from 'node:fs/promises';

import { marked } from 'marked';

import html from '../utilities/html.mjs';

import head from '../includes/head.mjs';

const markdown = await readFile('./rhythm-game-prototype.md', 'utf8');

process.stdout.write(html`<!DOCTYPE html>
  <html lang="en">
    ${head}
    <body>
      <header class="page-header">
        <a href="/">&#8592; Back to Portfolio</a>
      </header>
      <main class="case-study">${marked.parse(markdown).toString()}</main>
      <script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.0/dist/mermaid.min.js"></script>
    </body>
  </html>`);
