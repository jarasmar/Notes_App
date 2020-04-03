'use strict';

(function(exports) {
  function SingleNoteView(note = new Note) {
    this.note = note;
  }

  SingleNoteView.prototype.displayNote = function() {
    return '<div>' + this.note.text + '</div>'
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
