'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var toggle = header.querySelector('.page-header__toggle');
  var firstMenu = header.querySelector('.page-header__first-menu');
  var secondMenu = header.querySelector('.page-header__second-menu');

  var closeMenu = function () {
    toggle.classList.remove('page-header__toggle--open');
    toggle.classList.add('page-header__toggle--close');
    firstMenu.classList.remove('page-header__mobile-menu--show');
    firstMenu.classList.add('page-header__mobile-menu--hide');
    secondMenu.classList.remove('page-header__mobile-menu--show');
    secondMenu.classList.add('page-header__mobile-menu--hide');

    toggle.addEventListener('click', openMenu);
    toggle.removeEventListener('click', closeMenu);
  };

  var openMenu = function () {
    toggle.classList.remove('page-header__toggle--close');
    toggle.classList.add('page-header__toggle--open');
    firstMenu.classList.remove('page-header__mobile-menu--hide');
    firstMenu.classList.add('page-header__mobile-menu--show');
    secondMenu.classList.remove('page-header__mobile-menu--hide');
    secondMenu.classList.add('page-header__mobile-menu--show');

    toggle.removeEventListener('click', openMenu);
    toggle.addEventListener('click', closeMenu);
  };

  header.classList.remove('page-header--without-js');
  firstMenu.classList.remove('page-header__first-menu--without-js');
  toggle.classList.remove('page-header__toggle--without-js');

  closeMenu();
})();
