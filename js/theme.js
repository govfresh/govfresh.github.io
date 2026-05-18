const mq = window.matchMedia("(prefers-color-scheme: dark)");
function applyTheme(dark) {
    const theme = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
}
applyTheme(mq.matches);
mq.addEventListener('change', e => applyTheme(e.matches));
