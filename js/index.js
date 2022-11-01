document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("header-menu-toggle");
  const nav = document.getElementById("header-menu");
  if (!btn || !nav) return;
  btn.addEventListener("click", (e) => {
    nav.classList.toggle("active");
  });
});
