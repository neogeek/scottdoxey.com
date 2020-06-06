const { readFileSync, writeFileSync } = require('fs');

writeFileSync(
    'index.html',
    `<!DOCTYPE html>
<html>
    ${readFileSync('./includes/head.html')}
    <body>
        ${readFileSync('./includes/header.html')}
        ${readFileSync('./includes/footer.html')}
    </body>
</html>`
);
