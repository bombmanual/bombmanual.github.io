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
