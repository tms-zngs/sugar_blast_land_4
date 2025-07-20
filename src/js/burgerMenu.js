const toggleBtn = document.querySelector('[data-action="toggle"]');
const modalOverlay = document.querySelector('[data-overlay]');
const openIcon = document.querySelector('[data-icon="open"]');
const closeIcon = document.querySelector('[data-icon="close"]');

toggleBtn.addEventListener('click', () => {
  const isActive = modalOverlay.classList.contains('active');

  if (isActive) {
    modalOverlay.classList.remove('active');
    openIcon.classList.remove('hidden');
    closeIcon.classList.remove('visible');
    document.body.classList.remove('no-scroll');
  } else {
    modalOverlay.classList.add('active');
    openIcon.classList.add('hidden');
    closeIcon.classList.add('visible');
    document.body.classList.add('no-scroll');
  }
});

document.querySelectorAll('[data-link]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    modalOverlay.classList.remove('active');
    openIcon.classList.remove('hidden');
    closeIcon.classList.remove('visible');
    document.body.classList.remove('no-scroll');

    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
  });
});
