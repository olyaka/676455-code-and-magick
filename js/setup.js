'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialog = document.querySelector('.setup');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var NUMBER_OF_WIZARDS = 4;

var wizards = [];

var getRandomElement = function (array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};

for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
  wizards[i] = {
    name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(COAT_COLORS),
    eyeColor: getRandomElement(EYE_COLORS)
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
  var currentColor = getRandomElement(EYE_COLORS);
  wizardEyes.style.fill = currentColor;
  inputEyes.value = currentColor;
});

fireballWrap.addEventListener('click', function () {
  var currentColor = getRandomElement(FIREBALL_COLORS);
  fireballWrap.style.background = currentColor;
  inputFireball.value = currentColor;
});

var shopElement = document.querySelector('.setup-artifacts-shop');
var draggedItem = null;
var artifactsElement = document.querySelector('.setup-artifacts');

shopElement.addEventListener('dragstart', function (evt) {
  if (evt.target.tagName.toLowerCase() === 'img') {
    draggedItem = evt.target.cloneNode(true);
    evt.dataTransfer.setData('text/plain', evt.target.alt);
    artifactsElement.style = 'outline: 2px dashed red';
  }
});

artifactsElement.addEventListener('dragover', function (evt) {
  evt.preventDefault();
  artifactsElement.style = 'outline: 2px dashed red';
  return false;
});

artifactsElement.addEventListener('drop', function (evt) {
  if (!evt.target.hasChildNodes() && evt.target.classList.contains('setup-artifacts-cell')) {
    evt.target.appendChild(draggedItem);
  }
  artifactsElement.style = '';
  evt.target.style.backgroundColor = '';
  evt.preventDefault();
});

artifactsElement.addEventListener('dragenter', function (evt) {
  evt.target.style.backgroundColor = 'yellow';
  evt.preventDefault();
});

artifactsElement.addEventListener('dragleave', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.preventDefault();
});

setup.addEventListener('dragend', function (evt) {
  artifactsElement.style = '';
  evt.preventDefault();
});
