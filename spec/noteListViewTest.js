'use strict';

(function(exports) {
  function returnsHTMLString() {
    var noteListView = new NoteListView();

    noteListView.noteList.create("New Note");
    noteListView.noteList.create("Another Note");

    if(noteListView.generateView() !== '<ul><li><div>New Note</div></li><li><div>Another Note</div></li></ul>') {
      throw new Error('HTML string is not correct');
    }
  };

  returnsHTMLString();
})(this);
