function showPage(pageId) {
    let pages = document.querySelectorAll(".page");
    pages.forEach(function(page) {
        page.classList.remove("active-page");
    });
    document.getElementById(pageId).classList.add("active-page");
}

document.addEventListener("DOMContentLoaded", function () {
    showPage("home");
    emailjs.init("amzFTCPfPl5yMXZMH");

    const serviceID = "service_8u6uoqj";
    const templateID = "template_k51zipe";
    const reservationForm = document.getElementById("reservation-form");
    if (reservationForm) {
        reservationForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const btn = reservationForm.querySelector("button");
            btn.innerText = "Sending...";

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.innerText = "Book Table";
                    alert("Reservation request sent successfully!");
                    reservationForm.reset();
                }, (err) => {
                    btn.innerText = "Book Table";
                    alert("Failed to send reservation: " + JSON.stringify(err));
                });
        });

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const btn = contactForm.querySelector("button");
            btn.innerText = "Sending...";

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.innerText = "Send";
                    alert("Message sent successfully!");
                    contactForm.reset();
                }, (err) => {
                    btn.innerText = "Send";
                    alert("Failed to send message: " + JSON.stringify(err));
                });
        });
    }
});
