'use strict';

window.artifacts = (function () {
  return {
    show: function (wizards, similarWizards, i) {
      similarWizards[i].addEventListener('mouseover', function () {
        var width = similarWizards[3].getBoundingClientRect().right - similarWizards[0].getBoundingClientRect().left;
        var node = document.createElement('div');
        node.style = 'z-index: 100; text-align: left; background-color: #414342;';
        node.style.position = 'fixed';
        node.style.left = similarWizards[0].getBoundingClientRect().left + 'px';
        node.style.top = similarWizards[i].getBoundingClientRect().top - 200 + 'px';
        node.style.height = '190px';
        node.style.width = width + 'px';
        node.style.fontSize = '15px';
        node.classList.add('artifacts');
        document.body.insertAdjacentElement('afterbegin', node);

        var text = '';
        wizards[i].artifacts.forEach(function (element) {
          text += element.description + '<br>';
        });

        node.innerHTML = text;

        similarWizards[i].addEventListener('mouseleave', function () {
          var el = document.querySelector('.artifacts');
          if (el) {
            el.parentNode.removeChild(el);
          }
        });
      });
    }
  };
})();
