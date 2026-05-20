document.querySelectorAll('.post a[href$=".pdf"]').forEach(function(link) {
  var span = document.createElement('span');
  span.className = 'pdf-about';
  span.innerHTML = ' (<a href="/pdfs/">about PDFs</a>)';
  link.parentNode.insertBefore(span, link.nextSibling);
});
