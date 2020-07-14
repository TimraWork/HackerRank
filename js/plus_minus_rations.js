// [-4, 3, -9, 0, 4, 1
// [1, 1, 0, -1, -1]
// There are n=5 elements, two plus, two minus and one zero.
// Their ratios are 2/5 = 0.400000, 2/5 = 0.400000, 1/5 = 0.2000000 .
// Results are printed as:
// 0.400000
// 0.400000
// 0.200000

// Print the following  lines, each to  decimals:

// 1. proportion of plus values
// 2. proportion of minus values
// 3. proportion of zeros
// 4. Sample Input
'use strict';
(function () {
  function plusMinus(arr) {
    let plus = 0;
    let minus = 0;
    let zeros = 0;
    let result = ``;
    for (let i = 0; i < arr.length; i++) {
      plus += arr[i] > 0;
      minus += arr[i] < 0;
      zeros += arr[i] === 0;
    }
    plus = (plus / arr.length).toFixed(6);
    minus = (minus / arr.length).toFixed(6);
    zeros = (zeros / arr.length).toFixed(6);
    result = `${plus}\n${minus}\n${zeros}`;
    console.log(result);
    return result;
  }

  document.body.insertAdjacentHTML(`afterbegin`, `<pre>` + plusMinus([1, 1, 0, -1, -1]) + `</pre>`);
})();
