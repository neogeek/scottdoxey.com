import { html } from 'onlybuild';

import sizeOf from 'image-size';

import * as icons from './images/icons';

import head from './_includes/head.js';
import header from './_includes/header.js';
import footer from './_includes/footer.js';

import projectData from './_data/projects.json' assert { type: 'json' };

type ArrayItemType<T> = T extends (infer U)[] ? U : never;

const renderProjectIcon = (project: ArrayItemType<typeof projectData>) => {
  if (!project.icon) {
    return '';
  }

  const size = sizeOf(project.icon.src);

  return html`<img
    src="${project.icon.src}"
    width=${size.width}
    height=${size.height}
    class="project-icon"
    alt="${project.icon.alt}"
  />`;
};

const renderProjectDetails = (project: ArrayItemType<typeof projectData>) => {
  return html`<div class="project-details">
    ${renderProjectIcon(project)}
    <h2>
      ${project.url
        ? html`<a href="${project.url}">${project.name}</a>`
        : project.name}
    </h2>
    <p>${project.description}</p>
  </div>`;
};

const renderProjectLinks = (project: ArrayItemType<typeof projectData>) => {
  if (!project.links?.length) {
    return '';
  }

  return html`<div class="project-links">
    ${project.links.map(link => {
      const label =
        link.icon && icons[link.icon]
          ? html`${icons[link.icon]} ${link.label}`
          : link.label;

      if (link.url) {
        return html`<a href="${link.url}" class="button">${label}</a>`;
      } else {
        return html`<a href="#" class="button disabled">${label}</a>`;
      }
    })}
  </div>`;
};

const renderProjectMediaImage = (
  project: ArrayItemType<typeof projectData>
) => {
  if (!project.image) {
    return '';
  }

  const size = sizeOf(project.image.src);

  return html`<figure class="project-media">
    <picture class="dropshadow">
      ${project.image.sources && project.image.sources.length > 0
        ? project.image.sources.map(
            source =>
              html`<source srcset="${source.srcset}" media="${source.media}" />`
          )
        : ''}
      <img
        src="${project.image.src}"
        alt="${project.image.alt}"
        width="${size.width}"
        height="${size.height}"
      />
    </picture>
  </figure>`;
};

const renderProjectMediaVideo = (
  project: ArrayItemType<typeof projectData>
) => {
  if (!project.video) {
    return '';
  }

  return html`<figure class="project-media">
    <video
      width="500"
      autoplay
      loop
      muted
      playsinline
      preload="none"
      poster="${project.video.poster}"
    >
      ${project.video.sources?.map(
        source =>
          html`<source data-src="${source.src}" type="${source.type}" />`
      )}
    </video>
  </figure>`;
};

const renderProject = (project: ArrayItemType<typeof projectData>) => {
  return html`<section class="project" id="${project.id}">
    ${renderProjectDetails(project)} ${renderProjectLinks(project)}
    ${renderProjectMediaImage(project)} ${renderProjectMediaVideo(project)}
  </section>`;
};

export default html`<!DOCTYPE html>
  <html lang="en">
    <head>
      ${head}
    </head>
    <body>
      ${header}
      <main class="projects-main">
        ${projectData
          .filter(project => project.image || project.video)
          .map(renderProject)}
      </main>
      <div class="projects-mini">
        ${projectData
          .filter(project => !project.image && !project.video)
          .map(renderProject)}
      </div>
      ${footer}
      <script src="js/load-video.js" defer></script>
    </body>
  </html>`;
