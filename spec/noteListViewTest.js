'use strict';

(function() {
  function returnsHTMLString() {
    var noteList = new NoteList();
    noteList.create(new Note("New Note"));
    noteList.create(new Note("Another Note"));
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.generateView() === '<ul><li><div>New Note</div></li><li><div>Another Note</div></li></ul>');

  }

  returnsHTMLString();
})(this);
