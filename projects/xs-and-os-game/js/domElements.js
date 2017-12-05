'use strict';

(function () {
  var game1 = [
          '...',
          'XX.',
          'OOO',
  ];

  var game2 = [
          '.XO',
          '.X.',
          '.XO',
  ];

  var game3 = [
          'X.O',
          'XX.',
          '.OX',
  ];

  var game4 = [
          'X.O',
          'XO.',
          'OOX',
  ];

  var game5 = [
          'X..',
          '.O.',
          '.OX',
  ];

  // Change the number of game in the next row from game1 to game5
  var currentGame = game1;

  var wrapper = document.querySelector('.start__wrapper');
  var startButton = wrapper.querySelector('.start__button');
  var title = wrapper.querySelector('.start__title');

  // show the winner
  var showWinner = function () {
    var winnerTemplate = document.querySelector('#winner-template');
    var currentWinner = winnerTemplate.content.cloneNode(true);

    var winner = xoReferee(currentGame, squareWidth);

    currentWinner.querySelector('.start__winner').textContent = 'Winner is: \'' + winner + '\'';
    wrapper.appendChild(currentWinner);

    startButton.textContent = 'Results:';
    wrapper.classList.add('start__wrapper--show-winner');
    title.classList.add('start__title--show-winner');
  };

  var generateGameResults = function (yourGame) {
    // template
    var similarGameResultsTemplate = document.querySelector('#game-template');

    // createя DOM-element
    var createPictureDomElement = function (arr) {
      var gameResults = similarGameResultsTemplate.content.cloneNode(true);

      var numberElement = 0;
      for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < arr[i].length; j++) {
          var elementClass = '.start__element' + numberElement;
          gameResults.querySelector(elementClass).textContent = arr[i][j];
          numberElement++;
        }
      }

      return gameResults;
    };

    var newElement = createPictureDomElement(yourGame);

    wrapper.appendChild(newElement);
    startButton.textContent = 'who\'s winner?';
    startButton.addEventListener('click', showWinner);
    startButton.classList.add('start__button--is-played');
    wrapper.classList.add('start__wrapper--is-played');
    title.classList.add('start__title--is-played');
  };

  var generateGame1 = function () {
    generateGameResults(currentGame);
    startButton.removeEventListener('click', generateGame1);
  };

  startButton.addEventListener('click', generateGame1);
})();
