// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1 + 5 + 9.
// The right to left diagonal = 3 + 5 + 9.
// Their absolute difference is = | 15 - 17 | = 2.

// ar = [ [1, 2, 3], [4, 5, 6], [9, 8, 9] ]

'use strict';
(function () {
  function diagonalDifference(arr) {
    let result = [];
    for (let i in arr) {
      console.log('arr[i]', arr[i]);
      for(let j in arr[i]){
        result = arr[j];
        console.log('arr[j]',j);
      }
      // result = arr[i] > b[i] ? ratingA + 1 : ratingA;
    }
    return result;
  }
  // document.body.insertAdjacentText('afterbegin', compareTriplets([ [1, 2, 3], [4, 5, 6], [9, 8, 9] ]));
  document.body.insertAdjacentText('afterbegin', diagonalDifference([ [1, 2, 3], [4, 5, 6], [9, 8, 9] ]));
})();



