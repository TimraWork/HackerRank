'use strict';
(function () {
  let str = `RRBBCCBAABC`;
  let resultStr = ``;
  let counter = 0;
  for (let letter of str) {
    if (!resultStr.includes(letter)) {
      counter = str.split(letter).length - 1;
      resultStr += letter + counter;
    }
  }
  document.write(str, ` = `, resultStr);
})();
