'use strict';

(function() {

  function returnsTheNotesInArray() {
    var noteList = new NoteList();
        noteList.create("new note");
        noteList.create("another note");

    for (var i = 0; i < noteList.noteList.length; i++ ) {
      assert.isTrue(noteList.returnNotes()[i] === noteList.noteList[i])

      // if (noteList.returnNotes()[i] !== noteList.noteList[i]) {
      //   throw new Error(".returnNotes doesn't return the notes stored in the array");
      // }
    }
  }

  function createsANewNoteInNoteList() {
    var noteList = new NoteList();
    noteList.create("new note");
    assert.isTrue(noteList.returnNotes()[noteList.noteList.length - 1].text === "new note");

    // if (noteList.returnNotes()[noteList.noteList.length - 1].text !== "new note") {
    //   throw new Error( "the note has not been created" );
    // }
  }

  returnsTheNotesInArray();
  createsANewNoteInNoteList();
})(this);
