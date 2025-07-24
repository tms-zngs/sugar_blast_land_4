const toggleBtn = document.querySelector('[data-action="toggle"]');
const modalOverlay = document.querySelector('[data-overlay]');
const openIcon = document.querySelector('[data-icon="open"]');
const closeIcon = document.querySelector('[data-icon="close"]');

toggleBtn.addEventListener('click', () => {
  const isActive = modalOverlay.getAttribute('data-active') === 'true';

  if (isActive) {
    modalOverlay.setAttribute('data-active', 'false');
    openIcon.setAttribute('data-visible', 'true');
    closeIcon.setAttribute('data-visible', 'false');
    document.body.classList.remove('no-scroll');
  } else {
    modalOverlay.setAttribute('data-active', 'true');
    openIcon.setAttribute('data-visible', 'false');
    closeIcon.setAttribute('data-visible', 'true');
    document.body.classList.add('no-scroll');
  }
});

document.querySelectorAll('[data-link]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    modalOverlay.setAttribute('data-active', 'false');
    openIcon.setAttribute('data-visible', 'true');
    closeIcon.setAttribute('data-visible', 'false');
    document.body.classList.remove('no-scroll');

    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
