const bar = document.getElementById('read-time-bar');
const article = document.querySelector('article');

let ticking = false;
function updateBar() {
    bar.style.width = `${Math.min((document.documentElement.scrollTop / article.scrollHeight), 1) * 100}%`;
    ticking = false;
}
addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateBar);
        ticking = true;
    }
}, { passive: true });
