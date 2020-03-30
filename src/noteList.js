'use strict';

(function(exports) {
  function NoteList() {
    this.noteList = ['JavaScript is not my favourite language','Ruby is'];
  };

  NoteList.prototype.returnNotes = function () {
    return(this.noteList);
  };

  exports.NoteList = NoteList;

})(this);
