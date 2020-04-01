'use strict';

(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.returnNotes = function () {
    return(this.notes);
  };

  NoteList.prototype.create = function(text) {
    this.notes.push(text);
  };

  NoteList.prototype.getID = function(text) {
    return this.notes.map(note => note.text).indexOf(text);
  }

  exports.NoteList = NoteList;

})(this);
