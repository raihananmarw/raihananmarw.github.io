document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const toggle = document.getElementById("toggleDark");

  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    toggle.innerText = "☀️ Light Mode";
  }

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");
    toggle.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
