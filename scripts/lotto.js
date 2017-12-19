(function(window){
  'use strict';

  var numbers = [];
  var bonusNumber = 0;

  var App = window.App || {};

  function PlayLotto() {

  }

  PlayLotto.prototype.actOutLotto = function() {

    for(var i = 0; i < 6; i++) {
        numbers[i] = Math.floor(Math.random() * (60-1) + 1);
    }

    bonusNumber = Math.floor(Math.random() * (60-1) + 1);

    return [numbers, bonusNumber];
  }

  App.PlayLotto = PlayLotto;
  window.App = App;

}(window))
