'use strict';

(function(exports) {

  function returnsTheNotesInArray() {
    var noteList = new NoteList();

    for (var i = 0; i < noteList.noteList.length; i++ ) {
      if (noteList.returnNotes()[i] !== noteList.noteList[i]) {
        throw new Error(".returnNotes doesn't return the notes stored in the array");
      }
    };

    // console.log(noteList.returnNotes() == ['JavaScript is my favourite language']);
    // if (noteList.returnNotes()[0] !== 'JavaScript is my favourite language') {
    //   throw new Error(".returnNotes doesn't return the notes stored in the array");
    // }
  };

  returnsTheNotesInArray();
})(this);
