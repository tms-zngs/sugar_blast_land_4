const toggleBtn = document.querySelector('[data-action="toggle"]');
const burgerMenu = document.querySelector('.burger-menu');
const openIcon = document.querySelector('[data-icon="open"]');
const closeIcon = document.querySelector('[data-icon="close"]');

toggleBtn.addEventListener('click', () => {
  const isOpen = burgerMenu.dataset.visible === 'open';

  if (isOpen) {
    burgerMenu.dataset.visible = 'close';
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    document.body.classList.remove('no-scroll');

    setTimeout(() => {
      burgerMenu.classList.add('hidden');
    }, 300);
  } else {
    burgerMenu.classList.remove('hidden');
    setTimeout(() => {
      burgerMenu.dataset.visible = 'open';
    }, 10);
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    document.body.classList.add('no-scroll');
  }
});

document.querySelectorAll('.mobile-nav-item a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    burgerMenu.dataset.visible = 'close';
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    document.body.classList.remove('no-scroll');

    setTimeout(() => {
      burgerMenu.classList.add('hidden');
    }, 300);
  });
});
