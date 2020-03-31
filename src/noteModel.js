'use strict';

(function(exports) {
  function Note(text) {
    this.text = text;
  }

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
