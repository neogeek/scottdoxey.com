import { readFile } from 'node:fs/promises';

import { html } from 'onlybuild';

import { Marked } from 'marked';

import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

import head from '../_includes/head.mjs';

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);

export default html`<!DOCTYPE html>
  <html lang="en">
    <head>
      ${head}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
      />
    </head>
    <body>
      <header class="page-header">
        <a href="/">&#8592; Back to Portfolio</a>
      </header>
      <main class="case-study">
        ${marked.parse(await readFile('./case-study/tangle.md', 'utf8'))}
      </main>
      <script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.0/dist/mermaid.min.js"></script>
    </body>
  </html>`;
