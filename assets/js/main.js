(function() {
  var pages = document.getElementsByClassName('page');
  var pageCount = pages.length;
  pageCount -= document.getElementsByClassName('no-page-count').length;
  var currentPage = 0;
  var currentBG = 1;
  var pageString = document.getElementById('pagecount').innerHTML;
  [].forEach.call(pages, function (page) {
    if (page.classList.contains('no-page-count')) {
      return;
    }

    currentPage++;
    [].forEach.call(page.getElementsByClassName('page-footer'), function (footer) {
      if (!footer.classList.contains('no-auto-footer')) {
        footer.innerHTML = pageString.replace('%', currentPage).replace('%', pageCount);//("Strana " + currentPage + " z " + pageCount);
      }
    });

    // pages without page count are the main body
    page.classList.add('page-bg-0' + currentBG);
    currentBG %= 7;
    currentBG++;
  });
})();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-48421906-2', 'auto');
ga('send', 'pageview');
