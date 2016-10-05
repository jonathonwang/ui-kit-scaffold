(() => {
  const alertCloseButtons = document.querySelectorAll('.alert__close');
  for (const button of alertCloseButtons) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const alertWrapper = event.target.parentElement;
      if (!alertWrapper.classList.contains('alert--hidden')) {
        alertWrapper.classList.add('alert--hidden');
      }
    });
  }
})();
