document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'cookiesPolicyDismissed';
  const modal = document.querySelector('[data-cookies-modal]');
  if (!modal) return;

  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    modal.setAttribute('data-state', 'disabled');
    return;
  }

  modal.setAttribute('data-state', 'open');

  modal.addEventListener('click', event => {
    const btn = event.target.closest('[data-dismiss]');
    if (!btn) return;

    modal.setAttribute('data-state', 'disabled');
    localStorage.setItem(STORAGE_KEY, 'true');
  });
});
