// Simple enhancements for the Onyx site

document.addEventListener("DOMContentLoaded", () => {
  // Update footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Theme toggle (light / dark)
  const body = document.body;
  const toggle = document.querySelector(".theme-toggle");
  const icon = document.querySelector(".theme-toggle-icon");
  const label = document.querySelector(".theme-toggle-label");
  const STORAGE_KEY = "onyx-theme";

  const applyTheme = (theme) => {
    if (theme === "light") {
      body.classList.add("theme-light");
      if (icon) icon.textContent = "☀";
      if (label) label.textContent = "Light";
    } else {
      body.classList.remove("theme-light");
      if (icon) icon.textContent = "☾";
      if (label) label.textContent = "Dark";
    }
  };

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    applyTheme(storedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    applyTheme("light");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isLight = body.classList.contains("theme-light");
      const nextTheme = isLight ? "dark" : "light";
      applyTheme(nextTheme);
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    });
  }
});

