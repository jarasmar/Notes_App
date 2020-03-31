'use strict';

(function() {
  function returnsHTMLString() {
    var noteListView = new NoteListView();

    noteListView.noteList.create("New Note");
    noteListView.noteList.create("Another Note");

    assert.isTrue(noteListView.generateView() === '<ul><li><div>New Note</div></li><li><div>Another Note</div></li></ul>');
    // if(noteListView.generateView() !== '<ul><li><div>New Note</div></li><li><div>Another Note</div></li></ul>') {
    //   throw new Error('HTML string is not correct');
    // }
  }

  returnsHTMLString();
})(this);
