(function() {
    var idx;
    var documents = [];

    function lunr_search(term) {
        var resultsEl = document.getElementById('lunrsearchresults');
        resultsEl.innerHTML = '<div id="search-child"></div>';
        if (!term) return false;
        resultsEl.innerHTML =
            "<p class='border-bottom pb-3 mb-4'>Search results for: <span class='text-body-secondary'>" +
            term + "</span></p><div id='search-child'></div>";
        if (idx) {
            var results = idx.search(term);
            var container = document.getElementById('search-child');
            if (results.length > 0) {
                results.forEach(function(r) {
                    var doc = documents[parseInt(r.ref, 10)];
                    var body = doc.body.substring(0, 160) + (doc.body.length >= 160 ? '...' : '');
                    container.innerHTML +=
                        '<div><a href="' + doc.url + '"><h2 class="h4">' + doc.title + '</h2></a>' +
                        '<p class="mb-0 small text-body-secondary">' + body + '</p>' +
                        '<p class="mb-4 small text-body-secondary"><a href="' + doc.url + '">' + doc.url + '</a></p></div>';
                });
            } else {
                container.innerHTML = "<p class='lunrsearchresult'>No results found.</p>";
            }
        }
        return false;
    }

    var form = document.getElementById('search-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var input = document.getElementById('lunrsearch');
            if (input) lunr_search(input.value);
        });
    }

    fetch('/search.json')
        .then(function(r) { return r.json(); })
        .then(function(data) {
            documents = data;
            idx = lunr(function() {
                this.ref('id');
                this.field('title');
                this.field('body');
                data.forEach(function(doc) { this.add(doc); }, this);
            });
            var params = new URLSearchParams(location.search);
            if (params.has('q')) {
                var q = decodeURI(params.get('q'));
                var input = document.getElementById('lunrsearch');
                if (input) input.value = q;
                lunr_search(q);
            }
        });
})();
