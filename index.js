const { readFileSync } = require('fs');

const projects = require('./projects');
const prototypes = require('./prototypes');

const generateNameHash = displayName =>
    displayName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^0-9a-z\-]+/g, '');

const renderLink = ({ href, name }) => `<a href="${href}">${name}</a>`;
const renderTag = tag =>
    `<span class="project-badge project-badge--${generateNameHash(
        tag
    )}">${tag}</span>`;

const fileExtension = fileName =>
    fileName.toLowerCase().match(/\.([0-9a-z]+)$/)[1];

const renderVideoSource = source =>
    `
            <source src="${source}" type="video/${fileExtension(source)}" />`;

const renderVideo = ({ poster, sources }) => `
        <video
            width="500"
            height="280"
            autoplay
            loop
            muted
            playsinline
            preload
            poster="${poster}"
        >
            ${sources.map(renderVideoSource).join('\n')}
        </video>`;

const renderImage = source => `
        <img
            src="${source}"
            width="500"
            height="280"
        />`;

const renderProject = project =>
    `
<article class="project" id="${generateNameHash(project.displayName)}">
    <h1 class="project--header">${project.displayName}</h1>
    <p class="project--subheader">
        ${
            project.links && project.links.length > 0
                ? project.links.map(renderLink).join(' / ')
                : ''
        }
        ${
            project.tags && project.tags.length > 0
                ? project.tags.map(renderTag).join(' ')
                : ''
        }
    </p>
    <p class="project--description">${project.description}</p>
    <div class="project--media">
${
    project.videos && project.videos.length > 0
        ? project.videos.map(renderVideo).join('')
        : ''
}

    ${
        project.images && project.images.length > 0
            ? project.images.map(renderImage).join('')
            : ''
    }
    </div>

    ${
        project.additionalLinks && project.additionalLinks.length > 0
            ? `<footer class="project--footer">
        <h4 class="project--additional-links-header">
            Additional Links
        </h4>

        <ul class="project--additional-links">
            ${project.additionalLinks.map(
                link => `<li>${renderLink(link)}</li>`
            )}
        </ul>
    </footer>`
            : ''
    }
</article>`;

process.stdout.write(readFileSync('./includes/header.html'));

process.stdout.write(
    `
        <main class="page-wrapper">
            <section class="page-section">
                <h1 class="page-section--header">Recent Projects</h1>
                ${projects.map(renderProject).join('\n')}
            </section>

            <section class="page-section">
                <h1 class="page-section--header">Random Prototypes</h1>
                <div class="project" id="random-prototypes">
                    <div class="project-videos">
                    ${prototypes
                        .map(({ videos }) => videos.map(renderVideo).join('\n'))
                        .join('\n')}
                    </div>
                </div>
            </section>
        </main>
`
);

process.stdout.write(readFileSync('./includes/footer.html'));
