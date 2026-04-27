function showPage(pageId) {
    let pages = document.querySelectorAll('.page');
    
    pages.forEach(function(page) {
        page.classList.remove('active-page');
    });

    document.getElementById(pageId).classList.add('active-page');
}