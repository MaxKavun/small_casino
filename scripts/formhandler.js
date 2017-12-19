(function(window) {
  'use strict';

  var App = window.App || {};

  function FormHandler() {

  }

  FormHandler.prototype.addLottoNumbers = function(lottoNumbers, bonusNumber) {
    var numbersElem = document.getElementById("mainNumbers");
    var bonusElem = document.getElementById("bonusNumber");
    numbersElem.innerHTML = lottoNumbers;
    bonusElem.innerHTML = bonusNumber;
  }

  App.FormHandler = FormHandler;
  window.App = App;

}(window))
