document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'cookiesPolicyDismissed';
  const modal = document.querySelector('[data-cookies-modal]');
  if (!modal) return;

  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    modal.classList.add('disable');
    return;
  }

  modal.classList.add('is-open');

  modal.addEventListener('click', event => {
    const btn = event.target.closest('[data-dismiss]');
    if (!btn) return;

    modal.classList.remove('is-open');
    modal.classList.add('disable');
    localStorage.setItem(STORAGE_KEY, 'true');
  });
});