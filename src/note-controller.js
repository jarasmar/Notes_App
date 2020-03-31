'use strict';

(function(exports) {

  function changeElement() {
    var div = document.getElementById('app');
    div.innerHTML = 'Howdy';
  }
  changeElement();
  exports.changeElement = changeElement;
})(this);
