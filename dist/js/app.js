(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./dropdowns');

},{"./dropdowns":2}],2:[function(require,module,exports){
'use strict';

// Dropdown Stuff
var dropdowns = document.querySelectorAll('.dropdown button');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = dropdowns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var dropdown = _step.value;

    dropdown.addEventListener('click', function (event) {
      var dropdownWrapper = event.target.parentElement;
      var dropdownList = dropdownWrapper.querySelector('.dropdown__list');
      if (dropdownList.classList.contains('dropdown__list--open')) {
        dropdownList.classList.remove('dropdown__list--open');
      } else {
        dropdownList.classList.add('dropdown__list--open');
      }
      event.preventDefault;
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

var dropdownListItems = document.querySelectorAll('.dropdown__item a');
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

},{}]},{},[1]);

//# sourceMappingURL=app.js.map
