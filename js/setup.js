'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  
  var userDialog = document.querySelector('.setup');
  
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');
  var inputEyes = document.querySelector('input[name="eyes-color"]');
  var inputFireball = document.querySelector('input[name="fireball-color"]');
  
  
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE & !(evt.target.classList[0] === 'setup-user-name')) {
      closePopup();
    }
  };
  
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
  
  var closePopup = function () {
    setup.classList.add('hidden');
    setup.style.top = 80 + 'px';
    setup.style.left = 50 + '%';
    document.removeEventListener('keydown', onPopupEscPress);
  };
  
  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });
  
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });
  
  wizardEyes.addEventListener('click', function () {
    var currentColor = window.util.getRandomElement(window.wizards.EYE_COLORS);
    wizardEyes.style.fill = currentColor;
    inputEyes.value = currentColor;
  });
  
  fireballWrap.addEventListener('click', function () {
    var currentColor = window.util.getRandomElement(window.wizards.FIREBALL_COLORS);
    fireballWrap.style.background = currentColor;
    inputFireball.value = currentColor;
  });
})();
