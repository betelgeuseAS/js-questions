// 1. Анаграма
// Визначити чи є рядок анаграмою. Складається з тих самих символів (listen -> silent).
(function () {
  // Варіант 1
  // function aclean(arr) {
  //   let obj = {};
  //
  //   for (let i = 0; i < arr.length; i++) {
  //     let sorted = arr[i].toLowerCase().split("").sort().join("");
  //     obj[sorted] = arr[i];
  //   }
  //
  //   return Object.values(obj);
  // }
  //
  // let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  //
  // console.log(aclean(arr));

  // Варіант 2
  const buildCharObject = str => {
    const charObj = {}

    for(let char of str.replace(/[^\w]/g).toLowerCase()) {
      charObj[char] = charObj[char] + 1 || 1
    }

    return charObj
  }

  const anagram = (strA, strB) => {
    const aCharObject = buildCharObject(strA)
    const bCharObject = buildCharObject(strB)

    if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
      return false
    }

    for(let char in aCharObject) {
      if(aCharObject[char] !== bCharObject[char]) {
        return false
      }
    }

    return true
  }

  console.log(anagram('listen', 'silent'));
});



// 2. Паліндромом
// Визначити чи є рядок паліндромом. Послідовність символів, що однаково читається в обох напрямках.
(function () {
  // Варіант 1
  // function palindrome(str) {
  //   let check = '';
  //
  //   for (let i = str.length - 1; i >= 0; --i) {
  //     check += str[i];
  //   }
  //
  //   return str === check;
  // }
  //
  // console.log(palindrome('pap'));

  // Варіант 2
  const palindrome = str => {
    str = str.toLowerCase()

    return str === str.split('').reverse().join('')
  }

  console.log(palindrome('pap'));
});



// 3. Фібоначчі
// Вывести n-е число Фибоначчи. Это ряд чисел, где каждое последующее является сумой двух предодущих.
(function () {
  // Варіант 1
  // const fibonacci = num => {
  //   const result = [0, 1]
  //
  //   for(let i = 2; i <= num; i++) {
  //     const prevNum1 = result[i - 1]
  //     const prevNum2 = result[i - 2]
  //
  //     result.push(prevNum1 + prevNum2)
  //   }
  //
  //   return result[num]
  // }
  //
  // console.log(fibonacci(8))

  // Варіант 2
  // function fibonacci(n) {
  //   const sequence = [1, 1]
  //
  //   if (n < 2) {
  //     return sequence.slice(0, n)
  //   }
  //
  //   while (sequence.length < n) {
  //     const last = sequence[sequence.length - 1]
  //     const prev = sequence[sequence.length - 2]
  //
  //     sequence.push(last + prev)
  //   }
  //
  //   return sequence
  // }

  // Варіант 3
  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
  }

  console.log(fib(3))
  console.log(fib(8))
});



// 4. Знайти найдовший префікс серед заданих рядків (line, listen, library -> li).
(function () {
  const getCommonPrefix = (prefix, str2) => {
    let result = '';

    for (
      let i = 0, j = 0;
      i < prefix.length && j < str2.length;
      i++, j++
    ) {
      if (prefix[i] != str2[j]) {
        break
      }

      result += prefix[i];
    }

    return result;
  }

  function getLongestCommonPrefix(arr) {
    // Варіант 1
    // let prefix = arr[0];
    //
    // for (let i = 1; i < arr.length; i++) {
    //   prefix = getCommonPrefix(prefix, arr[i]);
    // }
    //
    // return prefix;

    // Варіант 2
    arr.sort();

    const minLength = Math.min(arr[0].length, arr[arr.length - 1].length);
    let i = 0;

    while (i < minLength && arr[0][i] === arr[arr.length -1][i]) {
      i++
    }

    return arr[0].substring(0, i);
  }

  // O(n * m) (First)
  // O(nlogn + minLen) (Second)
  const arr = ['abc123', 'abcd123', 'abcde123', 'abcdefg123'];
  console.log(getLongestCommonPrefix(arr)); // abc
});



// 5. Перевірити чи є число простим.
(function () {
  function isPrimeNum(num){
    for (var i = 2; i < num; i++) {
      if (num % i === 0){
        return false;
      }
    }

    return true;
  }

  console.log(isPrimeNum(3));
});



// 6. Вивести прості числа.
(function () {
  function allPrimeNum(n) {
    nextPrime:
      for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime;
        }

        console.log(i);
      }
  }

  allPrimeNum(10);
});



// 7. FizzBuzz
// Потрібно написати функцію, що виводить у консоль числа від 1 до n, де n - це ціле число, яка функція приймає як
// параметр, з такими умовами:
// виведення fizz замість чисел, кратних 3;
// виведення buzz замість чисел, кратних 5;
// виведення fizzbuzz замість чисел, кратних як 3, і 5.
(function () {
  const fizzBuzz = num => {
    for(let i = 1; i <= num; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
      } else if(i % 3 === 0) {
        console.log('fizz')
      } else if(i % 5 === 0) {
        console.log('buzz')
      } else {
        console.log(i)
      }
    }
  }

  fizzBuzz(15)
});



// 8. Пошук голосних
// Потрібно написати функцію, яка приймає рядок як аргумент і повертає кількість голосних, які містяться в рядку.
// Голосними є "a", "e", "i", "o", "u".
(function () {
  // Варіант 1
  // const findVowels = str => {
  //   let count = 0
  //
  //   const vowels = ['a', 'e', 'i', 'o', 'u']
  //
  //   for(let char of str.toLowerCase()) {
  //     if(vowels.includes(char)) {
  //       count++
  //     }
  //   }
  //
  //   return count
  // }
  //
  // console.log(findVowels('Find Vowels'))

  // Варіант 2
  const findVowels = str => {
    const matched = str.match(/[aeiou]/gi)

    return matched ? matched.length : 0
  }

  console.log(findVowels('Find Vowels'))
});



// 9. Унікальність всіх символів в рядку
// Напишіть функцію, яка визначає чи унікальні всі символи в рядку. Реєстр повинен враховуватися: 'a' та 'A' різні
// символи.
(function () {
  function isUnique(str) {
    // Варіант 1
    // for (let i = 0; i < str.length; i++) {
    //   if (str.lastIndexOf(str[i]) !== i) {
    //     return false
    //   }
    // }
    //
    // return true

    // Варіант 2
    // const chars = new Set()
    //
    // for (let i = 0; i < str.length; i++) {
    //   const current = str[i]
    //
    //   if (chars.has(current)) {
    //     return false
    //   }
    //
    //   chars.add(current)
    // }
    //
    // return true

    // Варіант 3
    return new Set(str).size === str.length
  }

  console.log(isUnique('abcdef')) // true
  console.log(isUnique('1234567')) // true
  console.log(isUnique('abcABC')) // true
  console.log(isUnique('abcadef')) // false
});



// 10. Плоский масив
// Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В
// результате должны получить новый одномерный массив.
(function () {
  function flatten(array) {
    const res = []

    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        const flat = flatten(array[i])

        for (let j = 0; j < flat.length; j++) {
          res.push(flat[j])
        }
      } else {
        res.push(array[i])
      }
    }

    return res
  }

  console.log(
    flatten([1, [2, 3], [4, 5, [6, 7]], 8]) // [1, 2, 3, 4, 5, 6, 7, 8]
  )
});



// 11. Видалення всіх значень, що повторюються, в рядку
// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.
(function () {
  function removeDupes(str) {
    // Варіант 1
    // const chars = {}
    // const res = []
    //
    // for (let i = 0; i < str.length; i++) {
    //  if (!chars[str[i]]) {
    //    chars[str[i]] = true
    //
    //    res.push(str[i])
    //  }
    // }
    //
    // return res.join('')

    // Варіант 2
    return Array.from(new Set(str)).join('')
  }

  console.log(removeDupes('abcd')) // 'abcd'
  console.log(removeDupes('aabbccdd')) // 'abcd'
  console.log(removeDupes('abcddbca')) // 'abcd'
  console.log(removeDupes('abababcdcdcd')) // 'abcd'
});



// 12. Какая строка встречается чаще всего
// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если
// таких строк несколько, то нужно вернуть первую, идя слева на право.
(function () {
  function highestFrequency(array) {
    const map = {}

    let maxFreq = 0
    let maxFreqStr = array[0]

    for (let i = 0; i < array.length; i++) {
      const current = array[i]

      if (map[current]) {
        map[current]++
      } else {
        map[current] = 1
      }

      if (map[current] > maxFreq) {
        maxFreq = map[current]
        maxFreqStr = current
      }
    }

    return maxFreqStr
  }

  console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // c
  console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // abc
  console.log(highestFrequency(['abc', 'def'])) // abc
  console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // ghi
});



// 13. Чи повернуто рядок?
// Напишіть функцію, яка приймає 2 рядки. Поверніть true, якщо рядки є перевернутим варіантом один одного. Інакше
// поверніть false.
(function () {
  function isStringRotated(source, test) {
    // Варіант 1
    // if (source.length !== test.length) {
    //   return false
    // }
    //
    // for (let i = 0; i < source.length; i++) {
    //   const rotate = source.slice(i, source.length) + source.slice(0, i)
    //
    //   if (rotate === test) {
    //     return true
    //   }
    // }
    //
    // return false

    // Варіант 2
    return source.length === test.length && (source + source).includes(test)
  }

  console.log(isStringRotated('javascript', 'scriptjava')) // true
  console.log(isStringRotated('javascript', 'iptjavascr')) // true
  console.log(isStringRotated('javascript', 'java')) // false
});



// 14. Чи є масив підмножиною іншого масиву
// Напишіть функцію, яка перевіряє, чи є другий масив підмножиною першого. Тобто чи є елементи другого масиву у першому.
(function () {
  function arraySubset(source, subset) {
    if (source.length < subset.length) {
      return false
    }

    for (let i = 0; i < subset.length; i++) {
      const index = source.indexOf(subset[i])
      if (index === -1) {
        return false
      }
      delete source[index]
    }
    return true
  }

  console.log(arraySubset([2, 1, 3], [1, 2, 3])) // true
  console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // true
  console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // false
  console.log(arraySubset([1, 2], [1, 2, 3])) // false
});



// 15. Анаграми
// Напишіть функцію, яка перевіряє, чи всі елементи в масиві є анаграмами один одного.
(function () {
  function allAnagrams(array) {
    const sorted = array.map(str => str.split('').sort().join(''))

    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] !== sorted[0]) {
        return false
      }
    }

    return true
  }

  console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
  console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false
});



// 16. Перевернути матрицю 3х3
// Напишіть функцію, яка приймає матрицю 3х3 і перевертає на 90 градусів за годинниковою стрілкою.
// Додатково: Напишіть ще дві функції, які перевертають матрицю на 180 і 270 градусів.
// [1, 2, 3]    [7, 4, 1]
// [4, 5, 6] -> [8, 5, 2]
// [7, 8, 9]    [9, 6, 3]
(function () {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  function rotate(source) {
    const newMatrix = source[0].map(() => [])

    for (let i = 0; i < source.length; i++) {
      for (let j = 0; j < source[0].length; j++) {
        newMatrix[j][source.length - 1 - i] = source[i][j]
      }
    }

    return newMatrix
  }

  function rotate180(source) {
    return rotate(rotate(source))
  }

  function rotate270(source) {
    return rotate180(rotate(source))
  }

  console.log(rotate(matrix))
});



// 17. Простий пошук
// Напишіть функцію, яка приймає відсортований масив з числами та числом. Необхідно повернути індекс числа, якщо
// воно є у масиві. Інакше повернути `-1`.
(function () {
  // Time: O(n)
  function search(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i
      }
    }

    return -1
  }

  // Time: O(log(n))
  function binary(array, target) {
    let start = 0
    let end = array.length - 1

    if (target < array[start] || target > array[end]) {
      return -1
    }

    while (true) {
      if (target === array[start]) {
        return start
      }

      if (target === array[end]) {
        return end
      }

      if (end - start <= 1) {
        return -1
      }

      const middle = Math.floor((start + end) / 2)

      if (target > array[middle]) {
        start = middle + 1
      } else if (target < array[middle]) {
        end = middle - 1
      } else {
        return middle
      }
    }
  }

  console.log(search([1, 3, 6, 13, 17], 13)) // 3
  console.log(search([1, 3, 6, 13, 17], 12)) // -1
});



// 18. Збалансовані дужки
// Напишіть функцію, яка перевірить рядок на збалансованість дужок: `{}, (), []`. Повернути `true` якщо вони
// збалансовані, інакше `false`.
(function () {
  function isBalanced(string) {
    const start = '({['
    const end = ']})'

    const map = {
      '}': '{',
      ')': '(',
      ']': '['
    }

    const queue = []

    for (let i = 0; i < string.length; i++) {
      const char = string[i]

      if (start.includes(char)) {
        queue.push(char)
      } else if (end.includes(char)) {
        const last = queue.pop()

        if (map[char] !== last) {
          return false
        }
      }
    }

    return !queue.length
  }

  console.log(isBalanced('(x + y) - (4)')) // true
  console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // true
  console.log(isBalanced('[{()}]')) // true
  console.log(isBalanced('(50)(')) // false
  console.log(isBalanced('[{]}')) // false
});



// 19. Черга з О(1) складністю операцій
// Створіть чергу, в якій будуть реалізовані операції на додавання елементів в кінець черги, видалення першого
// елемента та обчислення розміру черги зі складністю алгоритму `О(1)`.
(function () {
  // Варіант 1
  class LinkedList {
    #length = 0

    constructor() {
      this.head = null
      this.tail = null
    }

    addToTail(value) {
      const node = {
        value,
        next: null
      }

      if (this.#length === 0) {
        this.head = node
        this.tail = node
      } else {
        this.tail = node
      }

      this.#length++
    }

    removeFromHead() {
      if (this.#length === 0) {
        return
      }

      const value = this.head.value

      this.head = this.head.next
      this.#length--

      return value
    }

    size() {
      return this.#length
    }
  }

  class Queue extends LinkedList {
    constructor() {
      super()

      this.enqueue = this.addToTail
      this.dequeue = this.removeFromHead
    }

    get size() {
      return super.size()
    }
  }

  // Варіант 2
  // class Queue {
  //   #storage = {}
  //   #last = 0
  //   #first = 0
  //
  //   enqueue(item) {
  //     this.#storage[this.#last] = item
  //     this.#last++
  //   }
  //
  //   dequeue() {
  //     if (this.size === 0) {
  //       return
  //     }
  //
  //     const value = this.#storage[this.#first]
  //     delete this.#storage[this.#first]
  //     this.#first++
  //     return value
  //   }
  //
  //   get size() {
  //     return this.#last = this.#first
  //   }
  // }
});



// 20. Deep Equal
// Напишіть функцію, яка перевірятиме на “глибоку” рівність 2 вхідних параметрів.
(function () {
  function deepEqual(a, b) {
    if (Number.isNaN(a) && Number.isNaN(b)) {
      return true
    }


    if (typeof a !== typeof b) {
      return false
    }

    if (typeof a !== 'object' || a === null || b === null) {
      return a === b
    }

    if (Object.keys(a).length !== Object.keys(b).length) {
      return false
    }

    for (const key of Object.keys(a)) {
      if (!deepEqual(a[key], b[key])) {
        return false
      }
    }

    return true
  }

  const source = { a: 1, b: { c: 1 } }
  const test1 = { a: 1, b: { c: 1 } }
  const test2 = { a: 1, b: { c: 2 } }

  console.log(deepEqual(source, test1)) // true
  console.log(deepEqual(source, test2)) // false
  console.log(deepEqual(NaN, NaN)) // true
  console.log(deepEqual('test', 'test!')) // false
  console.log(deepEqual()) // true
});



// 21. Своя функція bind
// Реалізуйте функцію bind.
(function () {
  Function.prototype.myBind = function(context, ...args) {
    return (...rest) => {
      return this.call(context, ...args.concat(rest))
    }
  }

  function log(...props) {
    console.log(this.name, this.age, ...props)
  }

  const obj = { name: 'Name', age: 28 }

  log.myBind(obj, 1, 2)()
});



// 22. Універсальна сума
// Напишіть функцію, що складає 2 числа. Працювати функція повинна як показано на прикладах.
(function () {
  function add(a, b) {
    if (!a) {
      return add
    }

    if (!b) {
      return function calc(c) {
        if (!c) return calc

        return a + c
      }
    }

    return a + b
  }

  add(20, 22) // 42
  add(20)(22) // 42
  add(20)()(22) // 42
  add(20)()()()(22) // 42
  add(20)()()()()()()()()()()()(22) // 42
  add()(20)(22) // 42
  add()()()()(20)(22) // 42
  add()(20)()(22) // 42
  add()()()()()(20)()()()(22) // 42
});



// 22. GroupBy
// Напишіть функцію groupBy.
(function () {
  function groupBy(array, fn) {
    return array.reduce((res, current) => {
      const key = typeof fn === 'function' ? fn(current) : current[fn]

      if (!res[key]) {
        res[key] = []
      }

      res[key].push(current)

      return res
    }, {})
  }

  groupBy([6.1, 4.2, 6.3], Math.floor) // { '4': [4.2], '6': [6.1, 6.3] }
  groupBy(['one', 'two', 'three'], 'length') // { '3': ['one', 'two'], '5': ['three'] }
});



// Найдите числа, которые делятся на заданное число
(function () {
  // Variant 1
  // const divisibleBy = (numbers, divisor) => {
  //   const result = [];
  //
  //   numbers.forEach(item => {
  //     if (item % divisor === 0) result.push(item);
  //   });
  //
  //   return result;
  // }
  // console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

  // Variant 2
  const divisibleBy = (numbers, divisor) => numbers.filter(item => item % divisor === 0);
  console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
});



// Створити функцію id яка буде повертати значення на один більше. Наприклад:
// console.log(id()); // 0
// console.log(id()); // 1
// console.log(id()); // 2
// console.log(id()); // 3
// console.log(id()); // 4
(function () {
  // Variant 1
  // function id() {
  //   let id = Symbol.for("id");
  //
  //   id in window ? window[id] += 1 : window[id] = 0;
  //
  //   return window[id];
  // }
  //
  // console.log(id());
  // console.log(id());
  // console.log(id());

  // Variant 2
  function getId() {
    let id = 0;

    return function() {
      id += 1;
      return id;
    };
  }

  const id = getId();

  console.log(id());
  console.log(id());
  console.log(id());
});



// Remove duplicates in an Array
(function () {
  // Method 1 - Use Set
  // let chars = ['A', 'B', 'A', 'C', 'B'];
  // let uniqueChars = [...new Set(chars)];
  //
  // console.log(uniqueChars);

  // Method 2 - Using the indexOf() and filter() methods
  // let chars = ['A', 'B', 'A', 'C', 'B'];
  //
  // let dupChars = chars.filter((element, index) => {
  //   return chars.indexOf(element) !== index;
  // });
  //
  // console.log(dupChars);

  // Method 3 - Using the includes() and forEach() methods
  let chars = ['A', 'B', 'A', 'C', 'B'];

  let uniqueChars = [];
  chars.forEach((element) => {
    if (!uniqueChars.includes(element)) {
      uniqueChars.push(element);
    }
  });

  console.log(uniqueChars);
});



// Capitalize first letter
(function () {
  // Method 1
  // const capitalizeFirstLetter = (string) => string[0].toUpperCase() + ststringr.substr(1);

  // Method 2
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
});



// Сортування
(function () {
  // Method 1
  // const arr = [7, 8, 1, 3, 8, 7, 9, 3];
  // const sorted = arr.sort((a, b) => {
  //   if (a > b) return 1;
  //   if (a < b) return -1;
  //
  //   return 0
  // });

  // Method 2
  const arr = [7, 8, 1, 3, 8, 7, 9, 3];
  const sorted = arr.sort((a, b) => a-b); // a-b -> asc, b-a ->desc

  console.log(sorted);
});



// Маємо url рядок такого типу:
// "user.name.fristname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark"
//
// Напишіть функцію яка повертає цей рядок в такому вигляді:
// // {
// //   user: {
// //     name: {
// //       fristname: "Bob",
// //       lastname: "Smith"
// //     },
// //     favoritecolor: "Light Blue"
// //   },
// //   experiments: {
// //     theme: "dark"
// //   }
// // }
(function () {
  const inData = "user.name.fristname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark";

  function prepare(str) {
    const parts = str.split("&");
    const result = {};

    parts.forEach((itemPart) => {
      const nameValueParts = itemPart.split("=");
      const name = nameValueParts[0];
      const value = decodeURI(nameValueParts[1]);

      result[name] = value;
    });

    return result;
  }

  function deepen(obj) {
    const result = {};

    // For each object path (property key) in the object
    for (const objectPath in obj) {
      // Split path into component parts
      const parts = objectPath.split(".");

      // Create sub-objects along path as needed
      let target = result;
      while (parts.length > 1) {
        const part = parts.shift();
        target = target[part] = target[part] || {};
      }

      // Set value at end of path
      target[parts[0]] = obj[objectPath];
    }

    return result;
  }

  function queryObjective(str) {
    const prepared = prepare(str);
    const result = deepen(prepared);

    console.log("Result: ", result);

    return result;
  }

  queryObjective(inData);
});



// Знайти щасливе число. Щасливе число те яке в рядку зустрічається скільки разів
// скільки ж і є це саме число. Тобто із числа/рядка 221333 щасливе число є 3.
// Якщо декілька щасливих чисел, то повернути найбільше, якщо немає щасливого
// числа, то повернути нуль
(function () {
  function findLucky(numbers) {
    if (typeof numbers === "number") numbers = String(numbers);

    const mapObject = {};

    [...numbers].forEach((item, index) => {
      if (!mapObject.hasOwnProperty(item)) mapObject[item] = 0;

      mapObject[item] += 1;
    });

    const goodNumbers = [];

    for (const property in mapObject) {
      if (Number(property) === Number(mapObject[property])) {
        goodNumbers.push(Number(property));
      }
    }

    return goodNumbers.length > 0 ? Math.max(...goodNumbers) : 0;
  }

  const numbers = "11255552533";
  console.log("Result: ", findLucky(numbers));
});



// Ланцюжок викликів.
(function () {
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function () {
      console.log(this.step);
      return this;
    }
  };

  ladder.up().up().down().showStep(); // 1
});



// Поміняти місмцями два значення
(function () {
  // 1. Використання тимчасової змінної
  function swapWithTemp(num1, num2) {
    let temp = num1;

    num1 = num2;
    num2 = temp;
  }

  // 2. Використання додавання та віднімання
  function swapWithPlusMinus(num1, num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
  }

  // 3. Використання присвоювання всередині масиву
  function swapWithArray(num1, num2) {
    num2 = [num1, num1 = num2][0];
  }

  // 4. Використання деструктуризації
  function swapWithDestructuring(num1, num2) {
    [num1, num2] = [num2, num1];
  }
});



// Замикання (Closures)
(function () {
  function sum(num) {
    let result = 0;

    const calculate = (num) => {
      if (num === undefined) return result;
      result += num;

      return calculate;
    }

    return calculate(num);
  }

  console.log(sum()); // 0
  console.log(sum(2)()); // 2
  console.log(sum(2)(3)()); // 5
});



// ...
(function () {

})();
