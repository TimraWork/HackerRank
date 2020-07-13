'use strict';
(function () {
  // Complete the compareTriplets function below.
  function compareTriplets(a, b) {
    let arrayResult = [];
    let ratingA, ratingB = 0;
    for (let i in a) {
      ratingA = a[i] > b[i] ? ratingA + 1 : ratingA;
      ratingB = b[i] >  a[i] ? ratingB + 1 : ratingB;
    }
    arrayResult.push(ratingA, ratingB);
    return arrayResult;
  }
  document.body.insertAdjacentText('afterbegin', compareTriplets([17, 28, 30], [99, 16, 8]));
})();

