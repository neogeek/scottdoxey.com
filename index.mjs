import { readFile } from 'node:fs/promises';

const head = await readFile('./includes/head.html', 'utf8');
const header = await readFile('./includes/header.html', 'utf8');
const footer = await readFile('./includes/footer.html', 'utf8');

const projectData = JSON.parse(await readFile('./data/projects.json', 'utf8'));

const renderProject = project => {
  process.stdout.write(`<section class="project" id="${project.id}">
<div class="project-details">
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
</div>
${
  project.links?.length > 0
    ? `<div class="project-links">
  ${project.links
    .map(link => {
      if (link.url) {
        return `<a href="${link.url}" class="button">${link.label}</a>`;
      } else {
        return `<a href="#" class="button disabled">${link.label}</a>`;
      }
    })
    .join('\n')}
  </div>`
    : ''
}
${
  project.image
    ? `<figure class="project-media">
    <picture class="dropshadow">
      ${
        project.image.sources?.length > 0
          ? project.image.sources
              .map(source => {
                return `<source srcset="${source.srcset}" media="${source.media}" />`;
              })
              .join('\n')
          : ''
      }
      <img src="${project.image.src}" alt="${project.image.alt}" width="600" />
    </picture>
  </figure>`
    : ''
}
${
  project.video
    ? `<figure class="project-media">
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
        ?.map(source => {
          return `<source src="${source.src}" type="${source.type}" />`;
        })
        .join('\n')}
    </video>
  </figure>`
    : ''
}
</section>\n`);
};

process.stdout.write(`<!doctype html><html lang="en">`);

process.stdout.write(head);

process.stdout.write(`<body>`);

process.stdout.write(header);

process.stdout.write(`<main class="projects-main">\n`);

projectData
  .filter(project => project.image || project.video)
  .forEach(renderProject);

process.stdout.write(`</main>\n`);

process.stdout.write(`<div class="projects-mini">\n`);

projectData
  .filter(project => !project.image && !project.video)
  .forEach(renderProject);

process.stdout.write(`</div>\n`);

process.stdout.write(footer);

process.stdout.write('</body></html>');
