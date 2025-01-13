import { html } from 'onlybuild';

import * as icons from '../images/icons';

export default html`<ul class="links">
  <li>
    ${icons.pen}
    <a href="https://neogeek.dev">Blog</a>
  </li>
  <li>
    ${icons.github}
    <a href="https://github.com/neogeek">GitHub</a>
  </li>
  <li>
    ${icons.linkedin}
    <a href="https://www.linkedin.com/in/neogeek">LinkedIn</a>
  </li>
  <li>
    ${icons.bluesky}
    <a href="https://bsky.app/profile/scottdoxey.com">Bluesky</a>
  </li>
  <li>
    ${icons.stackoverflow}
    <a href="https://stackoverflow.com/users/135018/scott-doxey"
      >Stack Overflow</a
    >
  </li>
  <li>
    ${icons.speakerdeck}
    <a href="https://speakerdeck.com/neogeek">Speaker Deck</a>
  </li>
  <li>
    ${icons.dribbble}
    <a href="https://dribbble.com/neogeek">Dribbble</a>
  </li>
  <li>
    ${icons.itchio}
    <a href="https://scottdoxey.itch.io/">Itch.io</a>
  </li>
</ul>`;
