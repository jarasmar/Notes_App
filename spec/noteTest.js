'use strict';

(function() {

  function returnsTextOfNote() {
    var note = new Note('JavaScript is my favourite language');

    assert.isTrue(note.returnText() === 'JavaScript is my favourite language');

    // if (note.returnText() !== 'JavaScript is my favourite language') {
    //   throw new Error(".returnText doesn't return the note text");
    // }
  }

  returnsTextOfNote();
})(this);
