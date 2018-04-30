'use strict';

window.wizards = (function () {
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var COAT_COLORS = ['rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(101, 137, 164)', 'rgb(0, 0, 0)',
    'rgb(215, 210, 55)', 'rgb(56, 159, 117)', 'rgb(241, 43, 107)'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var inputEyes = document.querySelector('input[name="eyes-color"]');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var inputCoat = document.querySelector('input[name="coat-color"]');

  var wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

  wizardEyes.addEventListener('click', function () {
    var currentColor = window.util.getRandomElement(EYE_COLORS);
    wizardEyes.style.fill = currentColor;
    inputEyes.value = currentColor;
    wizard.onEyesChange(currentColor);

  });

  wizardCoat.addEventListener('click', function () {
    var currentColor = window.util.getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = currentColor;
    inputCoat.value = currentColor;
    wizard.onCoatChange(currentColor);
  });

  return {
    EYE_COLORS: EYE_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    COAT_COLORS: COAT_COLORS,
    wizard: wizard
  };
})();
