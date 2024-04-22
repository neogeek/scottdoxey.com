import { readFile } from 'node:fs/promises';

import { marked } from 'marked';

import html from '../_utilities/html.mjs';

import head from '../_includes/head.mjs';

process.stdout.write(html`<!DOCTYPE html>
  <html lang="en">
    ${head}
    <body>
      <header class="page-header">
        <a href="/">&#8592; Back to Portfolio</a>
      </header>
      <main class="case-study">
        ${marked.parse(await readFile('./rhythm-game-prototype.md', 'utf8'))}
      </main>
      <script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.0/dist/mermaid.min.js"></script>
    </body>
  </html>`);
