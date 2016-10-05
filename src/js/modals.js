(() => {
  const modalButtons = document.querySelectorAll('[data-modal-open]');
  const showModal = (modalId) => {
    const modal = document.querySelector(modalId);
    if (!modal.classList.contains('modal--open')) {
      modal.classList.add('modal--open');
    }
  };
  const hideModal = () => {
    const modals = document.querySelectorAll('.modal__overlay');
    for (const modal of modals) {
      if (modal.classList.contains('modal--open')) {
        modal.classList.remove('modal--open');
      }
    }
  };
  for (const modalButton of modalButtons) {
    modalButton.addEventListener('click', (event) => {
      const modalId = event.target.getAttribute('href');
      showModal(modalId);
      event.preventDefault();
    });
  }
  const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
  for (const modalCloseButton of modalCloseButtons) {
    modalCloseButton.addEventListener('click', (event) => {
      hideModal();
      event.preventDefault();
    });
  }
  const modalOuters = document.querySelectorAll('.modal__overlay');
  for (const modalOuter of modalOuters) {
    modalOuter.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal--open')) {
        hideModal();
      }
    });
  }
  document.addEventListener('keyup', (event) => {
    if (event.which === 27) {
      hideModal();
    }
  });
})();
