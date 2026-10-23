
/* Graha Pravesh 2026 — shared website behaviour */

document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });
  }

  // Set the current year automatically wherever this placeholder is used.
  document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // Prevent accidental double-click form submissions.
  document.querySelectorAll("form[data-prevent-double-submit]").forEach(
    function (form) {
      form.addEventListener("submit", function () {
        const submitButton = form.querySelector('[type="submit"]');

        if (submitButton) {
          submitButton.disabled = true;
          window.setTimeout(function () {
            submitButton.disabled = false;
          }, 3000);
        }
      });
    }
  );
});
