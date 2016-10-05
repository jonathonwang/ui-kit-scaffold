(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  var alertCloseButtons = document.querySelectorAll('.alert__close');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = alertCloseButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var button = _step.value;

      button.addEventListener('click', function (event) {
        event.preventDefault();
        var alertWrapper = event.target.parentElement;
        if (!alertWrapper.classList.contains('alert--hidden')) {
          alertWrapper.classList.add('alert--hidden');
        }
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
})();

},{}],2:[function(require,module,exports){
'use strict';

require('./dropdowns');

require('./modals');

require('./alerts');

require('./navbar');

},{"./alerts":1,"./dropdowns":3,"./modals":4,"./navbar":5}],3:[function(require,module,exports){
'use strict';

(function () {
  var dropdowns = document.querySelectorAll('.dropdown');
  var dropdownButtons = document.querySelectorAll('.dropdown .dropdown__btn');
  var dropdownListItems = document.querySelectorAll('.dropdown__item a');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = dropdownButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var dropdown = _step.value;

      dropdown.addEventListener('click', function (event) {
        // Make sure to close other open dropdowns excluding the one clicked on
        var dropdownWrapper = event.target.parentElement;
        var dropdownList = dropdownWrapper.querySelector('.dropdown__list');
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = dropdowns[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var otherDropdown = _step4.value;

            if (otherDropdown !== dropdownWrapper) {
              var otherDropdownList = otherDropdown.querySelector('.dropdown__list');
              if (otherDropdownList.classList.contains('dropdown__list--open')) {
                otherDropdownList.classList.remove('dropdown__list--open');
              }
            }
          }
          // Toggle dropdown__list--open
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        if (dropdownList.classList.contains('dropdown__list--open')) {
          dropdownList.classList.remove('dropdown__list--open');
        } else {
          dropdownList.classList.add('dropdown__list--open');
        }
        event.preventDefault();
        event.stopPropagation();
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = dropdownListItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var listItem = _step2.value;

      listItem.addEventListener('click', function (event) {
        var dropdownList = event.target.parentElement.parentElement;
        dropdownList.classList.remove('dropdown__list--open');
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  document.addEventListener('click', function (event) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = dropdowns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var dropdown = _step3.value;

        var dropdownList = dropdown.querySelector('.dropdown__list');
        if (dropdownList.classList.contains('dropdown__list--open')) {
          dropdownList.classList.remove('dropdown__list--open');
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  });
})();

},{}],4:[function(require,module,exports){
'use strict';

(function () {
  var modalButtons = document.querySelectorAll('[data-modal-open]');
  var showModal = function showModal(modalId) {
    var modal = document.querySelector(modalId);
    if (!modal.classList.contains('modal--open')) {
      modal.classList.add('modal--open');
    }
  };
  var hideModal = function hideModal() {
    var modals = document.querySelectorAll('.modal__overlay');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = modals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var modal = _step.value;

        if (modal.classList.contains('modal--open')) {
          modal.classList.remove('modal--open');
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = modalButtons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var modalButton = _step2.value;

      modalButton.addEventListener('click', function (event) {
        var modalId = event.target.getAttribute('href');
        showModal(modalId);
        event.preventDefault();
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var modalCloseButtons = document.querySelectorAll('[data-modal-close]');
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = modalCloseButtons[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var modalCloseButton = _step3.value;

      modalCloseButton.addEventListener('click', function (event) {
        hideModal();
        event.preventDefault();
      });
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  var modalOuters = document.querySelectorAll('.modal__overlay');
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = modalOuters[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var modalOuter = _step4.value;

      modalOuter.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal--open')) {
          hideModal();
        }
      });
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  document.addEventListener('keyup', function (event) {
    if (event.which === 27) {
      hideModal();
    }
  });
})();

},{}],5:[function(require,module,exports){
'use strict';

(function () {
  var navbarToggle = document.querySelector('.navbar__toggle');
  var navbarNav = document.querySelector('.navbar__nav');
  navbarToggle.addEventListener('click', function (event) {
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

},{}]},{},[2]);

//# sourceMappingURL=app.js.map
