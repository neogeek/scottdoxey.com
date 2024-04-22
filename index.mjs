import { readFile } from 'node:fs/promises';

import head from './includes/head.mjs';
import header from './includes/header.mjs';
import footer from './includes/footer.mjs';

const projectData = JSON.parse(await readFile('./data/projects.json', 'utf8'));

const renderProjectDetails = project => {
  return `<div class="project-details">
  ${
    project.icon
      ? `<img
    src="${project.icon.src}"
    width="100"
    class="project-icon"
    alt="${project.icon.alt}"
  />`
      : ''
  }
  <h2>
    ${
      project.url
        ? `<a href="${project.url}">${project.name}</a>`
        : project.name
    }
  </h2>
  <p>${project.description}</p>
</div>`;
};

const renderProjectLinks = project => {
  if (!project.links?.length) {
    return '';
  }

  return `<div class="project-links">
    ${project.links
      .map(link => {
        const label = link.icon
          ? `<i class="${link.icon}"></i> ${link.label}`
          : link.label;

        if (link.url) {
          return `<a href="${link.url}" class="button">${label}</a>`;
        } else {
          return `<a href="#" class="button disabled">${label}</a>`;
        }
      })
      .join('\n')}
    </div>`;
};

const renderProjectMediaImage = project => {
  if (!project.image) {
    return '';
  }

  return `<figure class="project-media">
  <picture class="dropshadow">
    ${
      project.image.sources?.length > 0
        ? project.image.sources
            .map(
              source =>
                `<source srcset="${source.srcset}" media="${source.media}" />`
            )
            .join('\n')
        : ''
    }
    <img src="${project.image.src}" alt="${project.image.alt}" width="600" />
  </picture>
</figure>`;
};

const renderProjectMediaVideo = project => {
  if (!project.video) {
    return '';
  }

  return `<figure class="project-media">
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
      ?.map(source => `<source src="${source.src}" type="${source.type}" />`)
      .join('\n')}
  </video>
</figure>`;
};

const renderProject = project => {
  return `<section class="project" id="${project.id}">
  ${renderProjectDetails(project)}
  ${renderProjectLinks(project)}
  ${renderProjectMediaImage(project)}
  ${renderProjectMediaVideo(project)}
</section>\n`;
};

process.stdout.write(`<!doctype html>
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
