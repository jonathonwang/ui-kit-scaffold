(() => {
  const navbarToggle = document.querySelector('.navbar__toggle');
  const navbarNav = document.querySelector('.navbar__nav');
  navbarToggle.addEventListener('click', (event) => {
    if (navbarToggle.classList.contains('navbar__toggle--open')) {
      navbarToggle.classList.remove('navbar__toggle--open');
    } else {
      navbarToggle.classList.add('navbar__toggle--open');
    }
    if (navbarNav.classList.contains('navbar__nav--open')) {
      navbarNav.classList.remove('navbar__nav--open');
    } else {
      navbarNav.classList.add('navbar__nav--open');
    }
    event.preventDefault();
  });
})();
