'use strict';

describe('Note', function() {
  var note;

  beforeEach(function() {
    note = new Note;
  });

  it('returns the text of a note', function() {
    expect(note.returnText()).toEqual('JavaScript is my favourite language');
  });
});
