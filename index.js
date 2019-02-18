const { projects, prototypes } = require('./data.json');

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

${
    project.videos && project.videos.length > 0
        ? `

    <div class="project-videos">
        ${project.videos.map(renderVideo).join('')}
    </div>`
        : ''
}

    ${
        project.images && project.images.length > 0
            ? `<div class="project-images">
        ${project.images.map(renderImage).join('')}
    </div>`
            : ''
    }

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

process.stdout.write(
    `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1" />
        <title>
            Scott Doxey — Web Designer &amp; Developer / Game Programmer
        </title>
        <link
            href="https://fonts.googleapis.com/css?family=Rubik:400,500"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="./css/styles.css" />

        <link rel="image_src" href="https://scottdoxey.com/images/icon.jpg" />
        <link rel="apple-touch-icon" href="./images/icon.jpg" />

        <meta
            name="description"
            content="Welcome to my online portfolio where I showcase all of my most recent work in the game development space."
        />
        <meta
            name="twitter:description"
            content="Welcome to my online portfolio where I showcase all of my most recent work in the game development space."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="neogeek" />
        <meta name="twitter:creator" content="neogeek" />
        <meta
            name="twitter:title"
            content="Hi! My name is Scott. I make websites, games and open source stuff."
        />
        <meta name="twitter:domain" content="https://scottdoxey.com/" />
        <meta
            name="twitter:image:src"
            content="https://scottdoxey.com/images/icon.jpg"
        />
    </head>

    <body>
        <header class="page-header">
            <h1>
                Hi! My name is Scott. I make <mark>websites</mark>,
                <mark>games</mark> and <mark>open source</mark> stuff.
            </h1>
        </header>

        <main class="page-wrapper">
            <section class="page-section">
                <h1 class="page-section--header">About Me</h1>

                <p>
                    By day I am a web designer and developer, by night I'm an
                    aspiring* game developer. I've been teaching myself Unity
                    for a little over a year and have built some fun prototypes,
                    none of which have been released to the public. However,
                    while working on these prototypes, I've amassed an extensive
                    collection of reusable components which I've published on
                    the Unity Asset Store.
                </p>

                <p>
                    <small
                        >*I'll remove this once I've released something</small
                    >
                </p>
            </section>

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

        <footer class="page-wrapper">
            <form
                class="newsletter-signup-form"
                action="https://tinyletter.com/scottdoxey"
                method="post"
                target="popupwindow"
                onsubmit="window.open('https://tinyletter.com/scottdoxey', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
            >
                <input type="hidden" value="1" name="embed" />
                <p>
                    <label for="tlemail"
                        >Enter your email address to recieve updates about my
                        projects:</label
                    >
                </p>
                <p>
                    <input type="text" name="email" id="tlemail" />
                    <button type="submit">Subscribe</button>
                </p>
                <p>
                    <a href="https://tinyletter.com" target="_blank">
                        <small>powered by TinyLetter</small>
                    </a>
                </p>
            </form>
        </footer>
        <script>
            if ('serviceWorker' in navigator) {
                window.addEventListener('load', () =>
                    navigator.serviceWorker.register('serviceWorker.js')
                );
            }
        </script>
    </body>
</html>
`
);
