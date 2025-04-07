document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggleDark");
  const html = document.documentElement;

  toggle?.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
  });

  // Set default theme on page load
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  }
});
