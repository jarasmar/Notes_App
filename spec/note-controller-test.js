(function() {
  function noteControllerTest() {
    var controller = new NoteController();
    controller.getHTML();

    assert.isTrue(document.getElementById('app').innerHTML === '<ul><li><div>Favourite drink: seltzer</div></li></ul>');
  }

  noteControllerTest();

})(this);
