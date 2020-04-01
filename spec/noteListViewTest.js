'use strict';

(function() {
  function returnsHTMLString20chars() {
    var noteList = new NoteList();
    noteList.create(new Note("Jara is super cool and eats cake everyday"));
    noteList.create(new Note("George is cool too but didnt get cake"));
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.generateView() === '<ul><li><div>Jara is super cool a</div></li><li><div>George is cool too b</div></li></ul>');

  }

  returnsHTMLString20chars();
})(this);
