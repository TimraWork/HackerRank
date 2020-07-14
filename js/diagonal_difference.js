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
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
      sum1 += arr[i][i];
      sum2 += arr[i][arr.length - i - 1];
    }
    return Math.abs(sum1 - sum2);
  }
  document.body.insertAdjacentText(`afterbegin`, diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));
})();
