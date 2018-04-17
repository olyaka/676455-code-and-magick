'use strict';

window.wizards = (function() {
    var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
    var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var NUMBER_OF_WIZARDS = 4;
    var userDialog = document.querySelector('.setup');
    
    var wizards = [];
    
    for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
      wizards[i] = {
        name: window.util.getRandomElement(WIZARD_NAMES) + ' ' + window.util.getRandomElement(WIZARD_SURNAMES),
        coatColor: window.util.getRandomElement(COAT_COLORS),
        eyeColor: window.util.getRandomElement(EYE_COLORS)
      };
    }
    
    var similarListElement = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');
    
    var renderWizard = function (wizard) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;
      return wizardElement;
    };
    
    var fragment = document.createDocumentFragment();
    
    for (i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');

    return {
        EYE_COLORS: EYE_COLORS,
        FIREBALL_COLORS: FIREBALL_COLORS
    };
})();