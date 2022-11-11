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
});



// ...
(function () {
  let dataUser = { name: "Robin" };

  function newUser (dataUser){
    dataUser = { name: "Kate" };
  }

  newUser(dataUser);

  console.log(dataUser.name); // Robin

  /*
    Як аргумент у функцію ми передаємо не об'єкт, а посилання об'єкт (dataUser). Тому під час виконання функції буде
    створено новий об'єкт, який ми присвоюємо (=) для цього посилання. Звичайно, його видно тільки всередині функції.
    А поза функцією це посилання продовжує вказувати на наш вихідний об'єкт, тому виведеться Robin.
   */
});



// ...
(function () {
  console.log(true + false + true); // 2

  /*
    Тут true перетворюється на 1, а false на 0.
    true + false + true = 1 + 0 + 1 = 2.
   */
});



// ...
(function () {
  const theArray = ['1', '2', '3'].map(parseInt);

  console.log(theArray); // [1, NaN, NaN]

  /*
    Array.prototype.map передає у функцію-коллбек 3 аргументи: елемент масиву, індекс елемента та сам масив.
    А у parseInt 2 аргументи: число або подібне до нього і система числення.
   */
});



// Який варіант створення об'єкта не вірний?
(function () {
  // 1. var obj = new Object();
  // 2. let obj = new Object{};
  // 3. let obj = {};
  // 4. let obj = new Object();

  // Правильна відповідь під номером 2.
});



// ...
(function () {
  var var1 = 12;

  (function SelfExecutedTestFun() {
    console.log("value of var1 is:" + var1);

    var var2 = 500;
  })();

  console.log("value of var1 from out side is:" + var1);
  console.log("value of var2 from out side is:" + var2);


  /*
    Наступний код виведе:
    "value of var1 is: 12" "value of var1 from out side is:12" "ReferenceError: var2 is not defined"

    Змінна var1 глобальна і консоль виведе її значення: "value of var1 is:12" "value of var1 from out side is:12".
    Оскільки змінна var2 оголошена всередині функції SelfExecuted вона локальна і консоль виведе:
    "ReferenceError: var2 is not defined"
   */
});



// ...
(function () {
  let a = 5;

  if (a) {
    let a = 2;

    a *= a;
  }

  console.log(a); // 5

  /*
    Тут справа в області видимості змінної оголошеної через let.
    У прикладі фактично дві незалежні змінні а, одна - глобальна, друга - у блоці if.

    Зауважимо, що якщо оголошення let a = 5; у першому рядку видалити, то в консолі буде помилка:
    "ReferenceError: a is not defined".
    Це тому, що змінну let завжди видно саме в тому блоці, де оголошено, і не більше.
   */
});



// Виберіть одну правильну відповідь.
// У якого оператора із перерахованих найвищий пріорітет?
(function () {
  // 1. Присвоєння =
  // 2. Постфіксний інкремент ++
  // 3. Додавання +
  // 4. Ділення /
  // 5. Взведення в степінь **

  /*
    Правильна відповідь під цифрою 2, тобто у постфіксного інкременту, найвищий пріоритет з перерахованих.
    Таблицю пріоритетів ви зможете знайти тут - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
   */
});



// Що нам видасть перший блок коду, якщо ми його запустимо і що нам видасть другий блок коду, якщо ми його також запустимо?
(function () {
  // 1 блок коду
  // let return = 5;
  // let for = 'Hi';
  // let let = false;
  //
  // console.log(return + for + let); // Error

  // 2 блок коду
  let obj = {
    for: 1,
    let: 2,
    return: 3
  }

  console.log(obj.for + obj.let + obj.return); // 6

  /*
    Якщо ми запусти перший скрипт, він видасть помилку: "SyntaxError: Illegal return statement".
    Якщо ми запустимо другий скрипт, все буде працювати і console нам виведе: 6.

    Зарезервовані слова можна використовувати як імена властивостей.
    Ім'я змінної не може збігатися із зарезервованими словами, такими як 'for', 'let', 'return' і т.д.
    Але для властивостей об'єкта такого обмеження немає.
   */
});



// ...
(function () {
  for (var i = 0; i < 10; i++){
    setTimeout(function (){
      console.log(i);
    }, 0);
  }

  /*
    Результат виконання наступного коду буде: 10 разів виведеться число 10
    Пояснення: 10 разів запуститься відкладений console.log(i), який лежить усередині анонімної
    функції, що створюється щоразу.
   */

  for (let i = 0; i < 10; i++){
    setTimeout(function (){
      console.log(i);
    }, 0);
  }

  /*
    Результат виконання наступного коду буде: виведеться від 0 до 9
    Пояснення: в такому випадку працює замикання завдяки let.
 */
});



// ...
(function () {
  console.log(!5 == !2); // true

  /*
    Виведе: true.

    1. Будь-яке позитивне число у логічному контексті це true.
    2. !ЧИСЛО ПОЗИТИВНЕ в логічному контексті це false.
    3. false == false -> true.
   */
});



// ...
(function () {
  /*
     Що тут зайве?
     number, string, boolean, object, null, undefined, symbol

     Object, оскільки решта примітивні типи даних.
   */
});



// ...
(function () {
  var a = [];

  console.log((a == a) + ' ' + (a == !a)); // true true

  /*
    Код виведе: true true

    У першому виразі все зрозуміло, йде порівняння посилання із самою себе. А в другому операнд "!a"
    перетворюється на boolean і відповідно породжує перетворення на boolean операнда "a".
    []==false (порожній масив => false), ![]==false (посилання на об'єкт (у випадку масив) з оператором ! => false)
    тобто. [] == ![]
   */
});



// ...
(function () {
  console.log(null || 2 && 3 || 4); // 3

  /*
    Пріоритет && вище, ніж ||, тому він виконається першим.
    Результат 2 && 3 = 3, тому вираз набуває вигляду: null || 3 || 4
    Тепер результатом є перше істинне значення: 3
   */
});



// ...
(function () {
  function a(val) {
    return true - val;
  }

  let b = a('4') + a('-4') + a('-4') + a('4'); // 4

  /*
    Виведе: 4

    Усередині функції є знак '-', отже коли відбуваються обчислення він перетворює на число:
    true -> 1
    '4' -> 4
    '-4' -> -4
    А далі — звичайні математичні обчислення.
   */
});



// ...
(function () {

})();
