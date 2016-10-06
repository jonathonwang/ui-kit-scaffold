(() => {
  const modalOpenButtons = document.querySelectorAll('[data-modal-open]');
  const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
  const modalOuters = document.querySelectorAll('.modal__overlay');
  // Show Modal Function
  const showModal = (modalId) => {
    const modal = document.querySelector(modalId);
    if (!modal.classList.contains('modal--open')) {
      modal.classList.add('modal--open');
    }
  };
  // Hide Modal Function
  const hideModal = () => {
    const modals = document.querySelectorAll('.modal__overlay');
    for (const modal of modals) {
      if (modal.classList.contains('modal--open')) {
        modal.classList.remove('modal--open');
      }
    }
  };
  // Modal Open Button Listeners
  for (const modalButton of modalOpenButtons) {
    modalButton.addEventListener('click', (event) => {
      const modalId = event.target.getAttribute('href');
      showModal(modalId);
      event.preventDefault();
    });
  }
  // Modal Close Button Listeners
  for (const modalCloseButton of modalCloseButtons) {
    modalCloseButton.addEventListener('click', (event) => {
      hideModal();
      event.preventDefault();
    });
  }
  // Modal Close On Outside Click Listeners
  for (const modalOuter of modalOuters) {
    modalOuter.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal--open')) {
        hideModal();
      }
    });
  }
  // Modal Close on Escape key Listeners
  document.addEventListener('keyup', (event) => {
    if (event.which === 27) {
      hideModal();
    }
  });
})();
