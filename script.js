// Ndërveprim për formën e kontaktit
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("successMessage").style.display = "block";
    this.reset();
});
