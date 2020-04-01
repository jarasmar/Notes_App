'use strict';

(function() {
  function singleNoteView() {
    var singleNoteView = new SingleNoteView(new Note('I am a new note!'));

    assert.isTrue(singleNoteView.displayNote() === '<div>I am a new note!</div>')
  }

  singleNoteView();

})(this);
