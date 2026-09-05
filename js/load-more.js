(function() {
    var btn = document.getElementById('load-more');
    if (!btn) return;
    var perPage = parseInt(btn.dataset.perPage, 10);
    var shown = perPage;
    var posts = document.querySelectorAll('.feed-post');
    var showingEl = document.getElementById('showing-count');
    var wrapper = document.getElementById('load-more-wrapper');

    btn.addEventListener('click', function() {
        var next = shown + perPage;
        for (var i = shown; i < Math.min(next, posts.length); i++) {
            posts[i].classList.remove('feed-hidden');
        }
        shown = Math.min(next, posts.length);
        showingEl.textContent = shown;
        if (shown >= posts.length) wrapper.style.display = 'none';
    });
})();
