async function loadCookiePopup() {
  const container = document.getElementById('cookie-container');
  const response = await fetch('/partials/cookie-popup.html');
  const html = await response.text();
  container.innerHTML = html;

  // После вставки — инициализация логики
  const cookiePopup = document.querySelector('[data-visible]');
  const acceptBtn = document.querySelector('[data-action="accept"]');
  const declineBtn = document.querySelector('[data-action="decline"]');

  if (!localStorage.getItem('cookieConsent')) {
    cookiePopup.dataset.visible = 'shown';
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookiePopup.dataset.visible = 'hidden';
  });

  declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookiePopup.dataset.visible = 'hidden';
  });
}

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', loadCookiePopup);
