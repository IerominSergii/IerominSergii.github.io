// toggling mobile menu in header
'use strict';

(function () {
  var headerNav = document.querySelector('.header__nav');
  var toggle = headerNav.querySelector('.header__toggle');
  var menu = headerNav.querySelector('.header__menu');
  var menuLink = headerNav.querySelectorAll('header__menu-link');

  // turn on the JavaScript
  var turnOnJavaScript = function () {
    headerNav.classList.remove('header__nav--nojs');
    toggle.classList.remove('header__toggle--hidden');
    menu.classList.add('header__menu--hidden');
  };

  var openMenu = function () {
    toggle.classList.remove('header__toggle--closed');
    toggle.classList.add('header__toggle--opened');
    menu.classList.remove('header__menu--hidden');

    toggle.removeEventListener('click', openMenu);
    toggle.addEventListener('click', closeMenu);
    addEventListenerForArray(menuLink, closeMenu);

    // menuLink.addEventListener('click', closeMenu);
  };

  var closeMenu = function () {
    toggle.classList.remove('header__toggle--opened');
    toggle.classList.add('header__toggle--closed');
    menu.classList.add('header__menu--hidden');

    toggle.removeEventListener('click', closeMenu);
    toggle.addEventListener('click', openMenu);
    removeEventListenerForArray(menuLink, closeMenu);
  };

  var addEventListenerForArray = function (arr, funct) {
    for (var i = 0; i <= arr.lenght; i++) {
      arr[i].addEventListener('click', funct);
    }
  };

  var removeEventListenerForArray = function (arr, funct) {
    for (var i = 0; i <= arr.lenght; i++) {
      arr[i].removeEventListener('click', funct);
    }
  };

  turnOnJavaScript();

  toggle.addEventListener('click', openMenu);
  closeMenu();
})();
