'use strict';

(function(exports) {
  function Note() {
    this.text = 'JavaScript is my favourite language';
  };

  Note.prototype.returnText = function () {
    return(this.text);
  };
  //   var note = new Note;
  //  function returnText() {
  //   return(note.text);
  // };
  exports.Note = Note;
  // exports.returnText = returnText;
})(this);
