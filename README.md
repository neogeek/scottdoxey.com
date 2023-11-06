# scottdoxey.com

[![Deploy](https://github.com/neogeek/scottdoxey.com/actions/workflows/deploy.workflow.yml/badge.svg)](https://github.com/neogeek/scottdoxey.com/actions/workflows/deploy.workflow.yml)

## Converting Videos

```bash
ffmpeg -i "handcrank-demo.mov" -vf "scale=min(1000\,iw):-2" -c:v libx264 -preset veryslow -an "handcrank-demo.mp4"
ffmpeg -i "handcrank-demo.mov" -vf "scale=min(1000\,iw):-2" -preset veryslow  -an "handcrank-demo.webm"
```
