'use strict';

(function() {

  function returnsTheNotesInArray() {
    var noteList = new NoteList();
        noteList.create(new Note("new note"));
        noteList.create(new Note("another note"));

    for (var i = 0; i < noteList.notes.length; i++ ) {
      assert.isTrue(noteList.returnNotes()[i] === noteList.notes[i])

      // if (noteList.returnNotes()[i] !== noteList.noteList[i]) {
      //   throw new Error(".returnNotes doesn't return the notes stored in the array");
      // }
    }
  }

  function createsANewNoteInNoteList() {
    var noteList = new NoteList();
    noteList.create("new note");

    assert.isTrue(noteList.returnNotes()[noteList.notes.length - 1] === "new note");

    // if (noteList.returnNotes()[noteList.noteList.length - 1].text !== "new note") {
    //   throw new Error( "the note has not been created" );
    // }
  }

  function assignNoteID() {
    var noteList = new NoteList();
    noteList.create(new Note('New Note'));
    noteList.create(new Note('Second New Note'));

    assert.isTrue(noteList.getID('New Note') === 0);
    assert.isTrue(noteList.getID('Second New Note') === 1);
  }

  assignNoteID();
  returnsTheNotesInArray();
  createsANewNoteInNoteList();
})(this);
