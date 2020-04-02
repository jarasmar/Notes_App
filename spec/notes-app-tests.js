'use strict';

(function() {

  function returnsTextOfNote() {
    var note = new Note('JavaScript is my favourite language');

    assert.isTrue(note.returnText() === 'JavaScript is my favourite language');

  }

  function returnsTheNotesInArray() {
    var noteList = new NoteList();
        noteList.create("new note");
        noteList.create("another note");

    for (var i = 0; i < noteList.notes.length; i++ ) {
      assert.isTrue(noteList.returnNotes()[i] === noteList.notes[i])

    }
  }

  function createsANewNoteInNoteList() {
    var noteList = new NoteList();
    noteList.create("new note");
    noteList.create("second note");

    assert.isTrue(noteList.notes[0].text === "new note");

  }

  function everyNoteHasID() {
    var noteList = new NoteList();
    noteList.create('New Note');
    noteList.create('Second New Note');

    assert.isTrue(noteList.notes[0].id === 0);
    assert.isTrue(noteList.notes[1].id === 1);
  }

  function returnsHTMLString20chars() {
    var noteList = new NoteList();
    noteList.create("Jara is super cool and eats cake everyday");
    noteList.create("George is cool too but didnt get cake");
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.generateView() === `<ul><li><div>Jara is super cool a</div></li><li><div>George is cool too b</div></li></ul>`);

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
  everyNoteHasID();
  returnsHTMLString20chars();
  noteControllerTest();
  singleNoteView();
})(this);
