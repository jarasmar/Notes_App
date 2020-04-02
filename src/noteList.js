'use strict';

(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.returnNotes = function () {
    return(this.notes);
  };

  NoteList.prototype.create = function(text) {
    var id = this.notes.length
    var note = new Note(text, id);
    this.notes.push(note);
  };

  NoteList.prototype.getID = function(text) {
    return this.notes.map(note => note.text).indexOf(text);
  }

  exports.NoteList = NoteList;

})(this);
