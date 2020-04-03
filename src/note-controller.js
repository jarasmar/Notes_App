'use strict';

(function(exports) {
  function NoteController(noteList = new NoteList()) {
    this.list = noteList;
    this.noteListView = new NoteListView(this.list);
  }


NoteController.prototype.getHTML = function() {

  document.getElementById('app').innerHTML = this.noteListView.generateView();

}

NoteController.prototype.getNote = function() {
  var self = this; // hashchange changes the scope so cant find 'this' anymore (assign it to a new var)

  window.addEventListener('hashchange', function() {
    var noteId = window.location.hash.split('#notes/')[1]; // hash.split creates an array with first part of URL and second
    document.getElementById('note').innerHTML = self.list.notes[noteId].text;
  })
}


NoteController.prototype.submitFormNewNote = function() {
    var form = document.getElementById('form');
    var self = this;
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      var text = document.getElementById('text').value;
      self.list.create(text);
      self.getHTML();
      clearTextArea();
    });
}

exports.NoteController = NoteController;
})(this);

var controller = new NoteController;
controller.getHTML();
controller.getNote();
controller.submitFormNewNote();
