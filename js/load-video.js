{
  Array.from(document.querySelectorAll('video')).forEach(video => {
    Array.from(video.querySelectorAll('source[data-src]')).forEach(source => {
      const src = source.getAttribute('data-src');
      if (src) {
        source.setAttribute('src', src);
      }
    });

    video.load();
  });
}
