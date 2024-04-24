import { readFile } from 'node:fs/promises';

import { html } from 'onlybuild';

import { marked } from 'marked';

import head from '../_includes/head.mjs';

export default html`<!DOCTYPE html>
  <html lang="en">
    <head>
      ${head}
    </head>
    <body>
      <header class="page-header">
        <a href="/">&#8592; Back to Portfolio</a>
      </header>
      <main class="case-study">
        ${marked.parse(
          await readFile('./case-study/rhythm-game-prototype.md', 'utf8')
        )}
      </main>
      <script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.0/dist/mermaid.min.js"></script>
    </body>
  </html>`;
