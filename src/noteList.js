'use strict';

(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.returnNotes = function () {
    return(this.notes);
  };

  NoteList.prototype.create = function(text){
    this.notes.push(text);
  };

  exports.NoteList = NoteList;

})(this);
