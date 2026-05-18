const bar = document.getElementById('read-time-bar');
const article = document.querySelector('article');
addEventListener('scroll', () => {
    bar.style.width = `${Math.min((document.documentElement.scrollTop / article.scrollHeight), 1) * 100}%`;
});
