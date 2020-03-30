'use strict';

(function(exports) {
  function returnsHTMLString() {
    var noteList = new NoteList();
    noteList.create("New Note");
    noteList.create("Another Note");
console.log('hello');
    if(noteList.generateView() !== '<ul><li><div>New Note</div></li><li><div>Another Note</div></li></ul>') {
      throw new Error ('HTML string is not correct');
    }
  };

  returnsHTMLString();
});
