// Page Switch
function showPage(pageId) {
    let pages = document.querySelectorAll('.page');

    pages.forEach(function(page) {
        page.classList.remove('active-page');
    });

    document.getElementById(pageId).classList.add('active-page');
}

// ⭐ Rating System
function setRating(value) {
    let stars = document.querySelectorAll('.rating span');
    document.getElementById("ratingValue").value = value;

    stars.forEach((star, index) => {
        if (index < value) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}

// Form Submit
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("feedbackForm");

    if (form) {
        form.addEventListener("submit", function(e){
            e.preventDefault();

            let rating = document.getElementById("ratingValue").value;

            if (rating === "") {
                alert("Please select rating ⭐");
                return;
            }

            document.getElementById("feedbackMsg").innerHTML =
                "✅ Thank you for your feedback!";

            form.reset();

            let stars = document.querySelectorAll('.rating span');
            stars.forEach(star => star.classList.remove("active"));
        });
    }
});
