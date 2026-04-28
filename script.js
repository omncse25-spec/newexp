// Page switching function
function showPage(pageId) {

    // sab pages hide karo
    let pages = document.querySelectorAll(".page");
    pages.forEach(function(page) {
        page.classList.remove("active-page");
    });

    // selected page show karo
    document.getElementById(pageId).classList.add("active-page");
}


// Default page load hone par HOME show ho
document.addEventListener("DOMContentLoaded", function () {
    showPage("home");
});
