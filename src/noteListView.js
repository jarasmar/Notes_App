'use strict';

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.generateView = function() {

    var html = `<ul>`;

    this.noteList.notes.forEach(note => {
      html += `<li><div>${note.text.slice(0, 20)}</div></li>`
    })

    html += `</ul>`;
    return html;

  }

  exports.NoteListView = NoteListView;
})(this);
