document.getElementById('mobile-nav-toggle').addEventListener('click', function() {
  var menu = document.getElementById('mobile-nav-menu');
  var open = menu.classList.toggle('is-open');
  this.setAttribute('aria-expanded', String(open));
});
