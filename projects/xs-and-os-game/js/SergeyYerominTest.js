var inputArray = [3, 6, -2, -5, 7, 3];
var inputArray2 = [-1, -2];
var inputArray3 = [5, 1, 2, 3, 1, 4];
var inputArray4 = [1, 2, 3, 0];
var inputArray5 = [9, 5, 10, 2, 24, -1, -48];

function adjacentElementsProduct(arr) {
  var maxResult;
  var currentResult;
  var firstElement;
  var secondElement;

  for (var i = 0; i <= arr.length; i++) {

    for (var j = i + 1; j <= arr.length; j++) {
      currentResult = arr[i] * arr[j];

      if (maxResult < currentResult) {
        maxResult = currentResult;
        firstElement = arr[i];
        secondElement = arr[j];
      }
    }
  }

  return maxResult;
};

alert(adjacentElementsProduct(inputArray));
