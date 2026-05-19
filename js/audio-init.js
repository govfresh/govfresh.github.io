var el = document.getElementById('player');
if (el) {
  el.removeAttribute('controls');
  new Plyr(el, {
    controls: ['play', 'progress', 'current-time', 'duration', 'mute', 'volume'],
    autoplay: false
  });
}
