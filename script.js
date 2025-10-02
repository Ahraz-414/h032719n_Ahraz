/* Small JS: theme toggle + year insertion */
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');

  if (stored === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (stored === 'light') {
    document.documentElement.removeAttribute('data-theme');
  }

  function updateToggleUI() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(isDark));
      toggle.textContent = isDark ? '☀️' : '🌙';
    }
  }
  updateToggleUI();

  if (toggle) {
    toggle.addEventListener('click', function () {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
      updateToggleUI();
    });
  }
})();
