'use strict';

window.util = (function () {
    return{
        getRandomElement: function (array) {
            var index = Math.floor(Math.random() * array.length);
            return array[index];
          }
    }
})();