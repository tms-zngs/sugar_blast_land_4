document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'cookiesPolicyDismissed';
  const banner = document.querySelector('[data-cookies-banner]');  

  if (!banner) return;  

  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    banner.style.display = 'none';
    return;
  }

  banner.querySelectorAll('[data-dismiss]').forEach(btn => {
    btn.addEventListener('click', () => {
      banner.style.display = 'none';
      localStorage.setItem(STORAGE_KEY, 'true');
    });
  });
});
