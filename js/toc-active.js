document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.toc-link');
  if (!links.length) return;

  const headingIds = Array.from(links).map(l => l.getAttribute('href').slice(1));
  const headings = headingIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if (!headings.length) return;

  function getActiveHeading() {
    for (let i = headings.length - 1; i >= 0; i--) {
      if (headings[i].getBoundingClientRect().top <= window.innerHeight * 0.25) {
        return headings[i].id;
      }
    }
    return headings[0].id;
  }

  function setActive(id) {
    links.forEach(l => {
      const isActive = l.getAttribute('href') === '#' + id;
      l.classList.toggle('active', isActive);
      l.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  // Set active on load
  setActive(getActiveHeading());

  // Update on scroll
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        setActive(getActiveHeading());
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
});
