'use strict';

(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;
  var artifactsElement = document.querySelector('.setup-artifacts');
  var setup = document.querySelector('.setup');

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
})();
