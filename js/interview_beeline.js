'use strict';

(function () {


  // ----------- 1 ВАРИАНТ -------------
  let str = `RRBBCCBAABC`;
  let resultStr = ``;
  resultStr = [...new Set(str.split(``))].map((letter)=>{
    return letter + (str.split(letter).length - 1);
  }).join(``);


  // ----------- 2 ВАРИАНТ -------------
  let str = `AAAAAABBBCCCDEFFFFFZZZZZZZZZ`;
  // функция должна вернуть 'A6B3C3DEF5Z9' 
  // если кол-во равно 1, то не выводим счетчик - (counter <= 1 ? `` : counter)
  function newStr(str) {
    let result = ``;
    let counter = 0;

    for (let i = 0; i <= str.length; i++) {
      if (str[i] === str[i - 1]) {
        counter++;
      } else {
        result += (i !== 0 ? str[i - 1] : ``) + (counter <= 1 ? `` : counter);
        counter = 1;
      }
    }

    return result;
  }
  console.log(newStr(str));


  // ----------- 3 ВАРИАНТ -------------
  var str = 'AAAAAABBBCCCDEFFFFFZZZZZZZZZ';
  // функция должна вернуть 'A6B3C3DEF5Z9' 
  function newStr(str) {
    var result = '';
    var counter = 0;
    var current = str[0];
    
    for (var i = 0; i <= str.length; i++) {
      if (str[i] === current) {
        counter++;
      } else {
        result += current + (counter <= 1 ? '' : counter);
        counter = 1;
        current = str[i];
      }
    }
  
    return result;
  };
  console.log(newStr(str));


  // ----------- 4 ВАРИАНТ -------------
  let str = `RRBBCCBAABC`;
  let resultStr = ``;
  resultStr = [...new Set(str.split(``))].map((letter)=>{
    return letter + (str.split(letter).length - 1);
  }).join(``);
  console.log(`resultStr =`, resultStr);


  // Defining function to get unique values from an array
  function getUnique(array){
      var uniqueArray = [];
      
      // Loop through array values
      for(i=0; i < array.length; i++){
          if(uniqueArray.indexOf(array[i]) === -1) {
              uniqueArray.push(array[i]);
          }
      }
      return uniqueArray;
  }

  var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
  var uniqueNames = getUnique(names);
  console.log(uniqueNames); // Prints: ["John", "Peter", "Clark", "Harry", "Alice"]


})();
