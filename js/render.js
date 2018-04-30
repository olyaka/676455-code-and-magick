'use strict';

window.render = (function () {
  var NUMBER_OF_WIZARDS = 4;
  var userDialog = document.querySelector('.setup');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  return {
    renderWizards: function (wizards) {
      while (similarListElement.lastChild) {
        similarListElement.removeChild(similarListElement.lastChild);
      }
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
        fragment.appendChild(renderWizard(wizards[i]));
      }
      similarListElement.appendChild(fragment);

      userDialog.querySelector('.setup-similar').classList.remove('hidden');
    }
  };
})();
