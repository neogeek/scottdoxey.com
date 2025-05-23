import { html } from 'onlybuild';

import * as icons from '../images/icons';

import links from './links.js';

export default html`<header class="page-header">
    <img
      src="./images/avatar.webp"
      width="200"
      height="200"
      srcset="./images/avatar.webp, /images/avatar@2x.webp 2x"
      class="avatar"
      loading="eager"
      alt="Picture of Scott and his cat Ada"
    />
    <div>
      <h1 class="speech-bubble">Hi! 👋 My name is Scott.</h1>
      <h2 class="speech-bubble">
        I'm a <b>game</b>, <b>web</b>, and <b>open-source tool</b>
        developer and designer.
      </h2>
    </div>
  </header>

  <div class="page-bio">
    <p>
      I've released
      <b>150+ open source projects</b> on ${icons.github}
      <a href="https://github.com/neogeek">GitHub</a>, I've won awards for 🏆
      <b>Best in VR</b> and 🏆 <b>Best of Accessibility</b> at the 2020
      <img
        src="./images/reality-hack.webp"
        width="30"
        height="28"
        srcset="./images/reality-hack.webp, /images/reality-hack@2x.webp 2x"
        alt="Reality Hack Logo"
        loading="eager"
      />
      <a href="https://devpost.com/software/accessibility-toolkit-for-unity"
        >MIT Reality Hack</a
      >, I run the
      <img
        src="./images/icons/monkey.svg"
        width="30"
        height="30"
        alt="Purple Monkey Game Jam Logo"
        loading="eager"
      />
      <a href="https://purplemonkeygamejam.com">Purple Monkey Game Jam</a> and a
      <img
        src="./images/icons/ggj.svg"
        width="30"
        height="30"
        alt="Global Game Jam Logo"
        loading="eager"
      />
      <a href="https://globalgamejam.org/">Global Game Jam</a> site, given talks
      at
      <img
        src="./images/icons/boston-game-dev.png"
        width="30"
        height="30"
        alt="Boston Game Dev Logo"
        loading="eager"
      />
      <a href="https://www.meetup.com/bostongamedev/">Boston Game Dev</a>
      meetups, a workshop at
      <img
        src="./images/icons/godotcon-boston.svg"
        width="30"
        height="30"
        alt="GodotCon Boston Logo"
        loading="eager"
      />
      <a href="https://conference.godotengine.org/2025/">GodotCon Boston</a>,
      and I just released my first game for mobile platforms called 🃏
      <a href="https://flipjacksgame.com">Flip Jacks</a>.
    </p>
  </div>

  <nav class="page-nav">${links}</nav>`;
