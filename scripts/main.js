(function(window) {
  'use strict';

  var App = window.App;
  var PlayLotto = App.PlayLotto;
  var FormHandler = App.FormHandler;

  var formHandler = new FormHandler();
  var newLotto = new PlayLotto();

  
  formHandler.addLottoGame(newLotto.actOutLotto);
  formHandler.addClickHandler();
}(window))
