# scottdoxey.com

[![Deploy](https://github.com/neogeek/scottdoxey.com/actions/workflows/deploy.workflow.yml/badge.svg)](https://github.com/neogeek/scottdoxey.com/actions/workflows/deploy.workflow.yml)

<a href="./screenshot.png"><img src="./screenshot.png" width="500" /></a>

## Development

### Building HTML Files

Any `.mjs` file not in the `utilities/` or `includes/` directory will be run via Node.js, and the output will then be saved to an HTML file and run through Prettier. If the filename is `index.mjs`, it will be saved as `index.html`, but if it is anything else, it will be saved as `filename/index.html`.

```bash
$ make build
```

### Copying Static Files

By default, all files in the `css/` and `images/` folders are copied to the `build/` directory. Add any additional files that need to be copied to the `build/` directory to the `./bin/copy.sh` script.

```bash
$ make copy
```

### Running Local Server

```bash
$ make serve
```

## Converting Videos

Convert files into both `mp4` and `webm` formats. Then, take a screenshot from one of the converted videos and save it as a poster image for the `<video>` tag.

```bash
ffmpeg -i "handcrank-demo.mov" -vf "scale=min(1000\,iw):-2" -c:v libx264 -preset veryslow -an "handcrank-demo.mp4"
ffmpeg -i "handcrank-demo.mov" -vf "scale=min(1000\,iw):-2" -preset veryslow -an "handcrank-demo.webm"
```
