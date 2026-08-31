// JavaScript code for interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const form = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector('input[name="name"]').value.trim();
    const company = form.querySelector('input[name="company"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const phone = form.querySelector('input[name="phone"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !phone || !message) {
      formStatus.textContent = "Please complete all required fields.";
      formStatus.style.color = "#c82333";
      return;
    }

    formStatus.textContent = "Thank you. Your message has been sent successfully.";
    formStatus.style.color = "#1da871";
    form.reset();
  });
}