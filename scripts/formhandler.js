(function(window) {
  'use strict';

  var App = window.App || {};
  var lottoNumbers;

  function FormHandler() {
    var lottoGame = document.getElementById("lottoGame");
    var diceGame = document.getElementById("diceGame");
    var mainContent = document.getElementById("mainContent");
  }

  FormHandler.prototype.addClickHandler = function() {
    lottoGame.addEventListener("click", function() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
          mainContent.innerHTML = this.responseText;
        }
      };
      xhttp.open('GET', '../pages/lotto.html', true);
      xhttp.send();
      setTimeout(function(){
        FormHandler.prototype.addLottoClickHandler.call()
      },50);
    });
    diceGame.addEventListener("click", function() {
      alert("Dice Roll game");
    });
  }

  FormHandler.prototype.addLottoGame = function(lottoNumbersInp) {
    lottoNumbers = lottoNumbersInp;
  }

  FormHandler.prototype.addLottoClickHandler = function() {
    var btnLuck = document.getElementById("checkLuck");
    btnLuck.addEventListener("click", function() {
      var solve = lottoNumbers();
      var numbersElem = document.getElementById("mainNumbers");
      var bonusElem = document.getElementById("bonusNumber");
      numbersElem.innerHTML = solve[0];
      bonusElem.innerHTML = solve[1];
    });
  }


  App.FormHandler = FormHandler;
  window.App = App;

}(window))
