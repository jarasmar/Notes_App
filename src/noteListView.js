'use strict';

(function(exports) {
  function NoteListView() {
    this.noteList = new NoteList();
  }

  NoteListView.prototype.generateView = function() {
    var textArray = [];
    for (var i = 0; i < this.noteList.noteList.length; i++) {
      textArray.push(this.noteList.noteList[i].text);
    }

    return('<ul><li><div>' + textArray.join('</div></li><li><div>') + '</div></li></ul>');

  }

  exports.NoteListView = NoteListView;
})(this);
