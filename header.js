// Highlight the navigation link that matches the current page.
// This removes the need to hard-code the active state in every HTML file.
document.addEventListener("DOMContentLoaded", function () {
  var current = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    if (link.getAttribute("href") === current) {
      link.classList.add("active-page");
      link.setAttribute("aria-current", "page");
    }
  });
});
