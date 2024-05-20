(async () => {
  const prefersReducedMotion = window.matchMedia(
    `(prefers-reduced-motion: reduce)`
  ).matches;

  if (prefersReducedMotion) {
    return false;
  }

  await new Promise(resolve => setTimeout(resolve, 100));

  Array.from(document.querySelectorAll('video')).forEach(video => {
    Array.from(video.querySelectorAll('source[data-src]')).forEach(source => {
      const src = source.getAttribute('data-src');
      if (src) {
        source.setAttribute('src', src);
      }
    });

    video.load();
  });
})();
