// Onyx site — dark mode only; footer year

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Remove saved light-mode preference so site stays dark
  try {
    window.localStorage.removeItem("onyx-theme");
  } catch (_) {
    /* ignore */
  }
  document.body.classList.remove("theme-light");
});
