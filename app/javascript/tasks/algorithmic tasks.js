// Реалізувати алгоритм бінарного пошуку

// Бінарний пошук - це алгоритм, що слідує парадигмі "розділяй і володарюй": завдання розбивається на підзавдання.
// Цей алгоритм пошуку зручний, якщо потрібно знайти число в масиві простих чисел або елемент у списку. Найпростіший
// спосіб вирішення - за допомогою рекурсії.

// Важливо: бінарний пошук можливий, тільки якщо масив даних відсортовано.

// Часова складність O(log n).
(function () {
  // Method 1
  // function binarySearch(value, list) {
  //   let first = 0; // left endpoint
  //   let last = list.length - 1; // right endpoint
  //   let position = -1;
  //   let found = false;
  //   let middle;
  //
  //   while (found === false && first <= last) {
  //     middle = Math.floor((first + last) / 2);
  //
  //     if (list[middle] == value) {
  //       found = true;
  //       position = middle;
  //     } else if (list[middle] > value) { // if in lower half
  //       last = middle - 1;
  //     } else { // in upper half
  //       first = middle + 1;
  //     }
  //   }
  //
  //   return position;
  // }
  //
  // console.log('Index: ', binarySearch(8, [1, 2, 3, 4, 5, 6, 7, 8, 9]));

  // Method 2
  let binarySearch = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {
      mid = Math.round((right - left) / 2) + left;

      if (target === nums[mid]) {
        return mid;
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1;
  }

  console.log('Index: ', binarySearch([-1, 0, 3, 5, 7, 9, 12], 9));
});



// Реалізуйте сортування бульбашкою

// Під час сортування бульбашкою порівнюють числа, що стоять поряд, вибудовуючи їх у порядку
// убування або зростання.

// Тимчасова складність - O(n²), через що алгоритм підходить тільки для невеликого обсягу даних.
(function () {
  const bubbleSort = arr => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
      let wasSwap = false;

      for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          wasSwap = true;
        }
      }

      if (!wasSwap) break;
    }

    return arr;
  };

  console.log(bubbleSort([-1, 4, 7, 2, 1, 5, -3, 3]));
});



// Як реалізувати алгоритм сортування вставкою?

// Принцип схожий із сортуванням колоди або одягу в шафі. Кожна карта лягає на своє місце, інакше
// кажучи, кожен наступний елемент додається на певну позицію.

// Часова складність O(n), в найгіршому випадку O(n^2).
(function () {
  const insertionSort = arr => {
    for (let i = 1, l = arr.length; i < l; i++) {
      const current = arr[i];
      let j = i;

      while (j > 0 && arr[j - 1] > current) {
        arr[j] = arr[j - 1];
        j--;
      }

      arr[j] = current;
    }

    return arr;
  };

  console.log(insertionSort([7, 4, 3, 9, 2]));
});



// Як реалізувати сортування злиттям?

// Як у випадку зі швидким сортуванням, цей метод відносять до групи "розділяй і володарюй". Наприклад,
// щоб відсортувати масив чисел, ви його розділите на невеликі частини, поки не залишиться масив в один
// або нуль відсортованих елементів. Далі слід об'єднати малі масиви, щоб отримати фінальний результат.

// Часова складність O(n log n), але при цьому він долучає O(n) додаткової пам'яті.
(function () {
  const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let i = j = 0;

    // Порівнюємо два масиви, по черзі зсуваючи покажчики
    while (i < arrFirst.length && j < arrSecond.length) {
      arrSort.push(
        (arrFirst[i] < arrSecond[j]) ?
          arrFirst[i++] : arrSecond[j++]
      );
    }
    // Обробляємо останній елемент за різної довжини масивів і повертаємо один відсортований масив
    return [
      ...arrSort,
      ...arrFirst.slice(i),
      ...arrSecond.slice(j)
    ];
  };

  const mergeSort = arr => {
    // Перевіряємо коректність переданих даних
    if (!arr || !arr.length) {
      return null;
    }

    // Якщо масив містить один елемент просто повертаємо його
    if (arr.length <= 1) {
      return arr;
    }

    // Знаходимо середину масиву і ділимо його на два
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);

    // Для нових масивів знову викликаємо сортування, зливаємо їх і повертаємо знову єдиний масив
    return merge(mergeSort(arrLeft), mergeSort(arrRight));
  };

  console.log(mergeSort([-1, 4, 7, 2, 1, 5, -3, 3]));
})();



// Реалізуйте алгоритм швидкого сортування.

// Алгоритм належить до групи "розділяй і володарюй", що зумовлює поділ задачі на підзадачі. Тобто,
// спочатку потрібно розбити наявні дані на найдрібніші складові, масиви з одного елемента
// (або з нульовою кількістю елементів).

// Часова складність найгіршого варіанту O(n^2), а середнього O(n log n).
(function () {
  const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }

    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };
})();



// ...
(function () {

})();
