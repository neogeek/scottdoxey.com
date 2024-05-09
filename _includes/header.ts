import { html } from 'onlybuild';

import socialLinks from './social-links.js';

export default html`<header class="page-header">
    <img
      src="./images/avatar.png"
      width="200"
      height="200"
      srcset="./images/avatar.png, /images/avatar@2x.png 2x"
      class="avatar"
      loading="eager"
      alt="Picture of Scott and his cat Ada"
    />
    <div>
      <h1>Hi! 👋 My name is Scott.</h1>
      <h2>
        I'm a <b>game</b>, <b>web</b>, and <b>open-source tool</b>
        developer and designer.
      </h2>
    </div>
  </header>

  <div class="page-bio">
    <p>
      I've released
      <b>150+ open source projects</b> on <i class="fa-brands fa-github"></i>
      <a href="https://github.com/neogeek">GitHub</a>, I've won awards for 🏆
      <b>Best in VR</b> and 🏆 <b>Best of Accessibility</b> at the 2020
      <img
        src="./images/reality-hack.png"
        width="30"
        height="30"
        alt="Reality Hack Logo"
        loading="eager"
      />
      <a href="https://devpost.com/software/accessibility-toolkit-for-unity"
        >MIT Reality Hack</a
      >, I run the
      <img
        src="./images/monkey.png"
        width="30"
        height="30"
        alt="Purple Monkey Game Jam Logo"
        loading="eager"
      />
      <a href="https://purplemonkeygamejam.com">Purple Monkey Game Jam</a>,
      given talks at
      <a href="https://www.meetup.com/bostongamedev/">Boston Game Dev</a>
      meetups, and I just released my first game for mobile platforms called 🃏
      <a href="https://flipjacksgame.com">Flip Jacks</a>.
    </p>
  </div>

  <nav class="page-nav">${socialLinks}</nav>`;
