(function () {
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  function applyTheme(dark) {
    var theme = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
  applyTheme(mq.matches);
  mq.addEventListener('change', function (e) { applyTheme(e.matches); });
})();
