'use strict';

(function () {
  var map = document.querySelector('.contacts__map');
  var mapPicture = map.querySelector('.contacts__map-picture');
  var mapPin = map.querySelector('.contacts__map-pin');
  var mapInteract = map.querySelector('.contacts__iframe');

  mapPicture.classList.add('contacts__map-picture--with-js');
  mapPin.classList.add('contacts__map-pin--with-js');
  mapInteract.classList.remove('contacts__iframe--without-js');
})();
