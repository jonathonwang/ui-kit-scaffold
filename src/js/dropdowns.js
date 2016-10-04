(() => {
  const dropdowns = document.querySelectorAll('.dropdown');
  const dropdownButtons = document.querySelectorAll('.dropdown .dropdown__btn');
  const dropdownListItems = document.querySelectorAll('.dropdown__item a');
  for (const dropdown of dropdownButtons) {
    dropdown.addEventListener('click', (event) => {
      // Make sure to close other open dropdowns excluding the one clicked on
      const dropdownWrapper = event.target.parentElement;
      const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
      for (const otherDropdown of dropdowns) {
        if (otherDropdown !== dropdownWrapper) {
          const otherDropdownList = otherDropdown.querySelector('.dropdown__list');
          if (otherDropdownList.classList.contains('dropdown__list--open')) {
            otherDropdownList.classList.remove('dropdown__list--open');
          }
        }
      }
      // Toggle dropdown__list--open
      if (dropdownList.classList.contains('dropdown__list--open')) {
        dropdownList.classList.remove('dropdown__list--open');
      } else {
        dropdownList.classList.add('dropdown__list--open');
      }
      event.preventDefault();
      event.stopPropagation();
    });
  }
  for (const listItem of dropdownListItems) {
    listItem.addEventListener('click', (event) => {
      const dropdownList = event.target.parentElement.parentElement;
      dropdownList.classList.remove('dropdown__list--open');
    });
  }
  document.addEventListener('click', (event) => {
    for (const dropdown of dropdowns) {
      const dropdownList = dropdown.querySelector('.dropdown__list');
      if (dropdownList.classList.contains('dropdown__list--open')) {
        dropdownList.classList.remove('dropdown__list--open');
      }
    }
  });
})();
