import { html } from 'onlybuild';

import links from './links.js';

export default html`<footer class="page-footer">
  <nav class="page-nav">${links}</nav>
  <p class="copyright">
    &copy; Scott Doxey 2006&ndash;${new Date().getFullYear()}
  </p>
</footer>`;
