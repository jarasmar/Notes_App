'use strict';

(function(exports) {
  function NoteController(noteList = new NoteList()) {
    this.list = noteList;
    this.list.create(new Note('Favourite drink: seltzer'));
    this.noteListView = new NoteListView(this.list);
  }


NoteController.prototype.getHTML = function() {
  
  document.getElementById('app').innerHTML = this.noteListView.generateView();

}

exports.NoteController = NoteController;
})(this);
