document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const content = document.getElementById("content");

  function loadPage(page) {
    fetch(page)
      .then((res) => res.text())
      .then((html) => {
        content.innerHTML = html;
      });
  }

  // Load the home tab by default
  loadPage("home.html");

  // Tab switching
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.getAttribute("data-page");
      loadPage(page);
    });
  });
});
