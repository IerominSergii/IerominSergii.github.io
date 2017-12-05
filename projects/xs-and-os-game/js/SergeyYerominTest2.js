'use strict';

var squareWidth = 3;

function xoReferee(data, winCount) {
  var winner;

  // check horizont results
  var horizontWinner;
  var horizontCount;

  for (var i = 0; i < data.length; i++) {
    horizontWinner = data[i][0];
    horizontCount = 1;

    for (var j = 1; j < data[i].length; j++) {
      if (horizontWinner === data[i][j] && data[i][j] !== '.') {
        horizontCount++;
      }

      if (horizontCount === winCount) {
        return winner = horizontWinner;
      }
    }
  }

  // check vertical results
  var verticalCount;
  var verticalWinner;

  if (horizontCount < 3) {
    for (var s = 0; s < winCount; s++) {
      verticalCount = 1;
      verticalWinner = data[0][s];

      for (var a = 1; a < data.length; a++) {
        if (verticalWinner === data[a][s] && data[a][s] !== '.') {
          verticalCount++;
        }

        if (verticalCount === winCount) {
          return winner = verticalWinner;
        }
      }
    }
  }

  // check leftToRight diagonal results
  var diagonalLeftToRightCount = 1;
  var diagonalLeftToRightWinner = data[0][0];

  for (var d1 = 1; d1 < data.length; d1++) {
    if (diagonalLeftToRightWinner === data[d1][d1] && data[d1][d1] !== '.') {
      diagonalLeftToRightCount++;
    }

    if (diagonalLeftToRightCount === winCount) {
      return winner = diagonalLeftToRightWinner;
    }
  }

  // check rightToLeft diagonal results
  var diagonalRightToLeftCount = 1;
  var diagonalRightToLeftWinner = data[0][data.length - 1];

  for (var d2 = 1; d2 < winCount; d2++) {
    var currentElement = data[d2][data.length - d2];

    if (diagonalRightToLeftWinner === currentElement && currentElement !== '.') {
      diagonalRightToLeftCount++;
    }

    if (diagonalRightToLeftCount === winCount) {
      return winner = diagonalRightToLeftWinner;
    }
  }

  return winner = 'D';
}
