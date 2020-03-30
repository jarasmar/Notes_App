'use strict';

(function(exports) {

  function returnsTextOfNote() {
    var note = new Note();

    if (note.returnText() !== 'JavaScript is my favourite language') {
      throw new Error(".returnText doesn't return the note text");
    }
  };

  returnsTextOfNote();
})(this);
