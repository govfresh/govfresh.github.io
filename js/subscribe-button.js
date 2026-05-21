const feedbackBand = document.getElementById("subscribe-band");
const feedbackButton = document.getElementById("subscribe-button");
let footerVisible = false;
let pageIsShort = false;
function updateButton() {
    const visible = document.documentElement.scrollTop > window.innerHeight * 0.4 && !footerVisible && !pageIsShort;
    feedbackBand.style.opacity = visible ? '1' : '0';
    feedbackBand.style.pointerEvents = visible ? 'auto' : 'none';
    feedbackButton.setAttribute('tabindex', visible ? '0' : '-1');
}
const footerObserver = new IntersectionObserver(([entry]) => {
    footerVisible = entry.isIntersecting;
    if (footerVisible && document.documentElement.scrollTop === 0) { pageIsShort = true; }
    updateButton();
});
footerObserver.observe(document.querySelector('footer'));
window.addEventListener('scroll', updateButton);
