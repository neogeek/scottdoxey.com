import { html } from 'onlybuild';

import sizeOf from 'image-size';

import head from './_includes/head.js';
import header from './_includes/header.js';
import footer from './_includes/footer.js';

import projectData from './_data/projects.json' assert { type: 'json' };

const renderProjectIcon = project => {
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

const renderProjectDetails = project => {
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

const renderProjectLinks = project => {
  if (!project.links?.length) {
    return '';
  }

  return html`<div class="project-links">
    ${project.links.map(link => {
      const label = link.icon
        ? html`<i class="${link.icon}"></i> ${link.label}`
        : link.label;

      if (link.url) {
        return html`<a href="${link.url}" class="button">${label}</a>`;
      } else {
        return html`<a href="#" class="button disabled">${label}</a>`;
      }
    })}
  </div>`;
};

const renderProjectMediaImage = project => {
  if (!project.image) {
    return '';
  }

  const size = sizeOf(project.image.src);

  return html`<figure class="project-media">
    <picture class="dropshadow">
      ${project.image.sources?.length > 0
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

const renderProjectMediaVideo = project => {
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
      preload
      poster="${project.video.poster}"
    >
      ${project.video.sources?.map(
        source => html`<source src="${source.src}" type="${source.type}" />`
      )}
    </video>
  </figure>`;
};

const renderProject = project => {
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
    </body>
  </html>`;
