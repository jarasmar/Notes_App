'use strict';

(function(exports) {
  function NoteList() {
    this.noteList = [];
  };

  NoteList.prototype.returnNotes = function () {
    return(this.noteList);
  };

  NoteList.prototype.create = function(text){
    var note = new Note(text);
    this.noteList.push(note);
  };

  exports.NoteList = NoteList;

})(this);
