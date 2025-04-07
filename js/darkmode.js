<script>
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggleDark");
  const html = document.documentElement;

  // Load saved mode
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  }

  // Cek jika tombol toggleDark ada
  if (toggle) {
    toggle.addEventListener("click", () => {
      html.classList.toggle("dark");
      localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
    });
  }
});
</script>
