/*
  * IIFE
  (function () {
    console.log('app');
  })();
  * "()" в кінці - виклик функції.
*/



// ...
(function () {
  console.log(2 && 1 && null && 0 && undefined); // null
});



// ...
(function () {
  console.log(+false); // 0
  console.log(+true); // 1
  console.log(+null); // 0
});



// ...
(function () {
  console.log(idVar);
  var idVar = 'str'; // undefined

  console.log(idConst);
  const idConst = 'str'; // ReferenceError: Cannot access 'idConst' before initialization

  console.log(idLet);
  let idLet = 'str'; // ReferenceError: Cannot access 'idConst' before initialization
});



// ...
(function () {
  let arr = [];

  arr[1] = 1;
  arr[3] = 3;

  console.log(arr.length); // 4
});



// ...
(function () {
  function myFun() {
    let a = (b = 3);
  }

  myFun();

  console.log(b); // 3
});



// ...
(function () {
  let squares = [2, 4, 6].map(x => x * x);
  [a, b] = squares;

  console.log(a + b); // 20
});



// ...
(function () {
  let interval = setInterval(() => console.log("Hi"), 1000);
  let timeout = setTimeout(() => console.log("Hi"), 1000);

  console.log(interval, timeout); // unique ids
});



// ...
(function () {
  var a = 5;
  var test = 5 != a ? "Yes" : "No";

  console.log(test); // No
});



// ...
(function () {
  var test = new Array(5).join("5");

  console.log(test); // "5555"
});



// ...
(function () {
  "use strict";

  console.log(typeof null); // object
});



// ...
(function () {
  if (function f() {}) {
    console.log(typeof f); // undefined
  }
});



// ...
(function () {
  const f = function() {
   this.x = 5;

   (function () {
     this.x = 3;
   })();

   console.log(this.x);
  }

  f(); // 3

  /*
    Функція f викликається за допомогою простого виклику - f(), тому це посилається на глобальний об'єкт.
    this.x = 5; // window.x = 5;
    Функціях, що самовикликається, також посилається на глобальний об'єкт.
    (function() {
      this.x = 3;  // window.x = 3;
    })();
    В результаті console.log(window.x); // 3
   */
})();


// ...
(function () {

})();
