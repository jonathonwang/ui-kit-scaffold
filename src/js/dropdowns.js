// Dropdown Stuff
const dropdowns = document.querySelectorAll('.dropdown button');
for (const dropdown of dropdowns) {
  dropdown.addEventListener('click', (event) => {
    const dropdownWrapper = event.target.parentElement;
    const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
    if (dropdownList.classList.contains('dropdown__list--open')) {
      dropdownList.classList.remove('dropdown__list--open');
    } else {
      dropdownList.classList.add('dropdown__list--open');
    }
    event.preventDefault;
  });
}
const dropdownListItems = document.querySelectorAll('.dropdown__item a');
for (const listItem of dropdownListItems) {
  listItem.addEventListener('click', (event) => {
    const dropdownList = event.target.parentElement.parentElement;
    dropdownList.classList.remove('dropdown__list--open');
  });
}
