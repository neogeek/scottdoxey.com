import { html } from 'onlybuild';

import socialLinks from './social-links.js';

export default html`<footer class="page-footer">
  <nav class="page-nav">${socialLinks}</nav>
  <p class="copyright">
    &copy; Scott Doxey 2006&ndash;${new Date().getFullYear()}
  </p>
</footer>`;
