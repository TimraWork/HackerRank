'use strict';
function simpleArraySum(ar) {
  return ar.reduce((a, b)=>(a + b));
}
document.body.insertAdjacentText(`afterbegin`, simpleArraySum([1, 2, 3, 4, 10, 11]));
