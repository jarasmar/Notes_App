'use strict';

(function() {

  function returnsTextOfNote() {
    var note = new Note('JavaScript is my favourite language');

    assert.isTrue(note.returnText() === 'JavaScript is my favourite language');

  }

  function returnsTheNotesInArray() {
    var noteList = new NoteList();
        noteList.create(new Note("new note"));
        noteList.create(new Note("another note"));

    for (var i = 0; i < noteList.notes.length; i++ ) {
      assert.isTrue(noteList.returnNotes()[i] === noteList.notes[i])

    }
  }

  function createsANewNoteInNoteList() {
    var noteList = new NoteList();
    noteList.create("new note");

    assert.isTrue(noteList.returnNotes()[noteList.notes.length - 1] === "new note");

  }

  function assignNoteID() {
    var noteList = new NoteList();
    noteList.create(new Note('New Note'));
    noteList.create(new Note('Second New Note'));

    assert.isTrue(noteList.getID('New Note') === 0);
    assert.isTrue(noteList.getID('Second New Note') === 1);
  }

  function returnsHTMLString20chars() {
    var noteList = new NoteList();
    noteList.create(new Note("Jara is super cool and eats cake everyday"));
    noteList.create(new Note("George is cool too but didnt get cake"));
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.generateView() === '<ul><li><div>Jara is super cool a</div></li><li><div>George is cool too b</div></li></ul>');

  }

  function noteControllerTest() {
    var controller = new NoteController();
    controller.getHTML();

    assert.isTrue(document.getElementById('app').innerHTML === '<ul><li><div>Favourite drink: sel</div></li></ul>');
  }

  function singleNoteView() {
    var singleNoteView = new SingleNoteView(new Note('I am a new note!'));

    assert.isTrue(singleNoteView.displayNote() === '<div>I am a new note!</div>')
  }


  createsANewNoteInNoteList();
  returnsTheNotesInArray();
  returnsTextOfNote();
  assignNoteID();
  returnsHTMLString20chars();
  noteControllerTest();
  singleNoteView();
})(this);
