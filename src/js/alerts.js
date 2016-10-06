(() => {
  const alertCloseButtons = document.querySelectorAll('.alert__close');
  const closeAlert = (event) => {
    const alertWrapper = event.target.parentElement;
    if (!alertWrapper.classList.contains('alert--hidden')) {
      alertWrapper.classList.add('alert--hidden');
    }
    event.preventDefault();
  };
  for (const button of alertCloseButtons) {
    button.addEventListener('click', event => closeAlert(event));
  }
})();
