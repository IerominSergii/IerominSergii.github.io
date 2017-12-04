'use strict';

(function () {
  // переменные
  var popup = document.querySelector('.basket-popup');
  var overlay = document.querySelector('.popup-overlay');
  var basketMenu = document.querySelector('.user-block__basket-link');
  var orderButton = document.querySelector('.goods-of-week__order');
  var unitBaskets = document.querySelectorAll('.unit__basket');

  // функции
  var openPopup = function (evt) {
    evt.preventDefault();
    popup.classList.add('basket-popup--open');
    popup.classList.remove('basket-popup--close');
    overlay.classList.add('popup-overlay--open');
    overlay.classList.remove('popup-overlay--close');

    basketMenu.removeEventListener('click', openPopup);
    overlay.addEventListener('click', closePopup);

    if (orderButton) {
      orderButton.removeEventListener('click', openPopup);
    }

    if (unitBaskets.length > 0) {
      for (var i = 0; i < unitBaskets.length; i++) {
        unitBaskets[i].removeEventListener('click', openPopup);
      }
    }
  };

  var closePopup = function (evt) {
    evt.preventDefault();
    popup.classList.add('basket-popup--close');
    popup.classList.remove('basket-popup--open');
    overlay.classList.add('popup-overlay--close');
    overlay.classList.remove('popup-overlay--open');

    basketMenu.addEventListener('click', openPopup);
    overlay.removeEventListener('click', closePopup);

    if (orderButton) {
      orderButton.addEventListener('click', openPopup);
    }

    if (unitBaskets.length > 0) {
      for (var i = 0; i < unitBaskets.length; i++) {
        unitBaskets[i].addEventListener('click', openPopup);
      }
    }
  };

  // обработчики событий
  basketMenu.addEventListener('click', openPopup);

  if (orderButton) {
    orderButton.addEventListener('click', openPopup);
  }

  if (unitBaskets.length > 0) {
    for (var i = 0; i < unitBaskets.length; i++) {
      unitBaskets[i].addEventListener('click', openPopup);
    }
  }
})();
