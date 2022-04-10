// IIFE
// (function () {
//   console.log('app');
// })();



// 1. Анаграмма.
// Определить является ли строка анаграммой. Состоит из одних и тех же символов (listen -> silent).
(function () {
  // Вариант 1
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

  // Вариант 2
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



// 2. Палиндромом.
// Определить является ли строка палиндромом. Последовательность символов, которая одинаково читается в обоих направлениях.
(function () {
  // Вариант 1
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

  // Вариант 2
  const palindrome = str => {
    str = str.toLowerCase()

    return str === str.split('').reverse().join('')
  }

  console.log(palindrome('pap'));
});



// 3. Фибоначчи.
// Вывести n-е число Фибоначчи. Это ряд чисел, где каждое последующее является сумой двух предодущих.
(function () {
  // Вариант 1
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

  // Вариант 2
  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
  }

  console.log(fib(3))
  console.log(fib(8))
});



// 4. Найти самый длинный префикс среди заданных строк (line, listen, library -> li).
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
    // Вариант 1
    // let prefix = arr[0];
    //
    // for (let i = 1; i < arr.length; i++) {
    //   prefix = getCommonPrefix(prefix, arr[i]);
    // }
    //
    // return prefix;

    // Вариант 2
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



// 5. Проверить является ли число простым.
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



// 6. Вывести простые числа.
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



// 7. FizzBuzz.
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
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



// 8. Поиск гласных.
// Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке. Гласными являются «a», «e», «i», «o», «u».
(function () {
  // Вариант 1
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

  // Вариант 2
  const findVowels = str => {
    const matched = str.match(/[aeiou]/gi)

    return matched ? matched.length : 0
  }

  console.log(findVowels('Find Vowels'))
});



// ...
(function () {
  console.log('app');
})();
