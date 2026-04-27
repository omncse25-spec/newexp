function showPage(pageId) {
    let pages = document.querySelectorAll('.page');

    pages.forEach(function(page) {
        page.classList.remove('active-page');
    });

    document.getElementById(pageId).classList.add('active-page');
}


// 🔥 FEEDBACK FORM JS
document.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("feedbackForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            document.getElementById("feedbackMsg").innerHTML =
                "✅ Thank you for your feedback!";

            form.reset();
        });
    }

});
