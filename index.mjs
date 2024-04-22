import { readFile } from 'node:fs/promises';

import html from './utilities/html.mjs';

import head from './includes/head.mjs';
import header from './includes/header.mjs';
import footer from './includes/footer.mjs';

const projectData = JSON.parse(await readFile('./data/projects.json', 'utf8'));

const renderProjectDetails = project => {
  return html`<div class="project-details">
    ${project.icon
      ? html`<img
          src="${project.icon.src}"
          width="100"
          class="project-icon"
          alt="${project.icon.alt}"
        />`
      : ''}
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
    ${project.links
      .map(link => {
        const label = link.icon
          ? html`<i class="${link.icon}"></i> ${link.label}`
          : link.label;

        if (link.url) {
          return html`<a href="${link.url}" class="button">${label}</a>`;
        } else {
          return html`<a href="#" class="button disabled">${label}</a>`;
        }
      })
      .join('\n')}
  </div>`;
};

const renderProjectMediaImage = project => {
  if (!project.image) {
    return '';
  }

  return html`<figure class="project-media">
    <picture class="dropshadow">
      ${project.image.sources?.length > 0
        ? project.image.sources
            .map(
              source =>
                html`<source
                  srcset="${source.srcset}"
                  media="${source.media}"
                />`
            )
            .join('\n')
        : ''}
      <img src="${project.image.src}" alt="${project.image.alt}" width="600" />
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
      ${project.video.sources
        ?.map(
          source => html`<source src="${source.src}" type="${source.type}" />`
        )
        .join('\n')}
    </video>
  </figure>`;
};

const renderProject = project => {
  return html`<section class="project" id="${project.id}">
    ${renderProjectDetails(project)} ${renderProjectLinks(project)}
    ${renderProjectMediaImage(project)} ${renderProjectMediaVideo(project)}
  </section>`;
};

process.stdout.write(html`<!DOCTYPE html>
  <html lang="en">
    ${head}
    <body>
      ${header}
      <main class="projects-main">
        ${projectData
          .filter(project => project.image || project.video)
          .map(renderProject)
          .join('\n')}
      </main>
      <div class="projects-mini">
        ${projectData
          .filter(project => !project.image && !project.video)
          .map(renderProject)
          .join('\n')}
      </div>
      ${footer}
    </body>
  </html>`);
