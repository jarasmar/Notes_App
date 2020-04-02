'use strict';

(function(exports) {
  function Note(text, id) {
    this.text = text;
    this.id = id;
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
