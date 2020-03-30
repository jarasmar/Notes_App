'use strict';

function Note() {
  this.text = 'JavaScript is my favourite language';
}

(function(exports) {
  var note = new Note;
  function returnText() {
    return(note.text);
  };

  exports.returnText = returnText;
})(this);
