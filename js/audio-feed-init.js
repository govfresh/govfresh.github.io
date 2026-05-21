document.querySelectorAll('.feed-player').forEach(function(el) {
  new Plyr(el, {
    controls: ['play', 'progress', 'current-time', 'duration', 'mute', 'volume'],
    autoplay: false,
    iconUrl: '/assets/plyr/plyr.svg'
  });
});
