// Fades in the floating #cta-banner (button + optional sponsor credit,
// fading as a unit) once the reader has scrolled past ~40% of the viewport
// height, hides it again once the footer is visible (or immediately, on
// short pages where the footer is visible from the top).
(function () {
  var band = document.getElementById('cta-banner');
  var buttons = band ? band.querySelectorAll('.cta-banner-button') : [];
  var footer = document.querySelector('footer');
  if (!band || !buttons.length || !footer) return;

  var footerVisible = false;
  var pageIsShort = false;

  function updateButton() {
    var visible = document.documentElement.scrollTop > window.innerHeight * 0.4 && !footerVisible && !pageIsShort;
    band.style.opacity = visible ? '1' : '0';
    band.style.pointerEvents = visible ? 'auto' : 'none';
    buttons.forEach(function (btn) {
      btn.setAttribute('tabindex', visible ? '0' : '-1');
    });
  }

  var footerObserver = new IntersectionObserver(function (entries) {
    footerVisible = entries[0].isIntersecting;
    if (footerVisible && document.documentElement.scrollTop === 0) {
      pageIsShort = true;
    }
    updateButton();
  });

  footerObserver.observe(footer);

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateButton();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();
