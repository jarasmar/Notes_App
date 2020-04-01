'use strict';

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.generateView = function() {
    
    return('<ul><li><div>' + this.noteList.notes.map(note => note.text).join('</div></li><li><div>') + '</div></li></ul>');

  }

  exports.NoteListView = NoteListView;
})(this);
