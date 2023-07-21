// IIFE (Immediately Invoked Function Expression)
(function () {
  (function () {
    // …
  })();

  (() => {
    // …
  })();

  (async () => {
    // …
  })();
});



// How to detect file extension in a string
(function () {
  const getExtensionFromPath = (filename) => {
    return filename.substring(filename.lastIndexOf(".") + 1);
  }

  console.log(getExtensionFromPath('path/image.jpg'));
});



// How to pull url file extension out of url string
(function () {
  function getUrlExtension(url) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
  }

  console.log(getUrlExtension('https://example.com/folder/file.jpg'));
  console.log(getUrlExtension('https://example.com/fold.er/fil.e.jpg?param.eter#hash=12.345'));
});



// Get width height of remote image from url
(function () {
  // Variant 1: Callback
  // const getMeta = (url, cb) => {
  //   const img = new Image();
  //   img.onload = () => cb(null, img);
  //   img.onerror = (err) => cb(err);
  //   img.src = url;
  // };
  //
  // getMeta("https://i.stack.imgur.com/qCWYU.jpg", (err, img) => {
  //   console.log(img.naturalWidth, img.naturalHeight);
  // });

  // Variant 2: Using the load Event listener (Promise):
  // const getMeta = (url) =>
  //   new Promise((resolve, reject) => {
  //     const img = new Image();
  //     img.onload = () => resolve(img);
  //     img.onerror = (err) => reject(err);
  //     img.src = url;
  //   });
  //
  // (async () => {
  //   const img = await getMeta('https://i.stack.imgur.com/qCWYU.jpg');
  //   console.log(img.naturalHeight + ' ' + img.naturalWidth);
  // })();

  // Variant 3: Using HTMLImageElement.decode() (Promise)
  const getMeta = async (url) => {
    const img = new Image();
    img.src = url;
    await img.decode();
    return img;
  };

  getMeta('https://i.stack.imgur.com/qCWYU.jpg').then(img => {
    console.log(img.naturalHeight +' '+ img.naturalWidth);
  });
});



// Read uploaded text file
(function () {
  const readTextFile = (file, callback) => {
    // Check if the file is a text
    if (file.type && !file.type.startsWith('text/')) return '';

    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
      callback(event?.target?.result || '');
    });

    reader.readAsText(file);
  }
});



// Get file data by url
(function () {
  const getFileDataByUrl = (url) => {
    try {
      let fileSize, fileExtension = '';
      let http = new XMLHttpRequest();

      http.open('HEAD', url, false); // false = Synchronous

      http.send(null); // It will stop here until this http request is complete

      // When we are here, we already have a response, b/c we used Synchronous XHR
      if (http.status === 200) {
        fileSize = +http.getResponseHeader('content-length');
        fileExtension = http.getResponseHeader('content-type');
      }

      return {
        size: isNaN(fileSize) ? 0 : fileSize, // In bytes
        extension: fileExtension.replace(/.+\/|;.+/g, "")
      }
    } catch (error) {
      return { size: 0, extension: '' };
    }
  }

  console.log(getFileDataByUrl('https://images.unsplash.com/photo-1681637524413-0f3be0f3ac73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'));
});



// Determine file size without downloading a file
(function () {
  // Method 1 - Synchronous XMLHttpRequest
  // function getFileSize(url) {
  //   var fileSize = '';
  //   var http = new XMLHttpRequest();
  //   http.open('HEAD', url, false); // false = Synchronous
  //
  //   http.send(null); // It will stop here until this http request is complete
  //
  //   // When we are here, we already have a response, b/c we used Synchronous XHR
  //   if (http.status === 200) {
  //     fileSize = http.getResponseHeader('content-length');
  //     console.log('fileSize = ' + fileSize);
  //   }
  //
  //   return fileSize;
  // }

  // Method 2 - Asynchronous XMLHttpRequest
  function getFileSize(url) {
    var fileSize = '';
    var http = new XMLHttpRequest();
    http.open('HEAD', url, true); // true = Asynchronous
    http.onreadystatechange = function() {
      if (this.readyState == this.DONE) {
        if (this.status === 200) {
          fileSize = this.getResponseHeader('content-length');
          console.log('fileSize = ' + fileSize);
        }
      }
    };
    http.send(); // It will submit request and jump to the next line immediately, without even waiting for request result b/c we used ASYNC XHR call
  }
});



// Remove special characters
(function () {
  const removeSpecialCharacters = (value) => {
    return value.replace(/[<>:"|?*]/g, '');
  };
});



// Як працювати з async/await у циклах
(function () {
  // Функції для прикладу
  function delay() {
    return new Promise(resolve => setTimeout(resolve, 300));
  }

  async function delayedLog(item) {
    // Ми можемо використовувати await для Promise який повертається з delay
    await delay();
    console.log(item);
  }

  // Синхронні цикли
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    // Робимо що-небудь з item
  }
  // Або
  array.forEach((item) => {
    // Робимо що-небудь з item
  });

  // Асинхронні цикли
  // 1. Не чекати результату виконання
  // forEach не буде чекати виконання завершення завдання. forEach - синхронна операція.
  async function processArray(array) {
    array.forEach(async (item) => {
      await delayedLog(item);
    });
    console.log('Done!');
  } // Результат: Done! 1 2 3
  // 2. Опрацювання циклу послідовно
  // Щоб дочекатися результату виконання тіла циклу нам потрібно повернутися до циклу "for".
  // Але цього разу ми використовуватимемо його нову версію з конструкцією for..of (Спасибі Iteration Protocol):
  async function processArray(array) {
    for (const item of array) {
      await delayedLog(item);
    }
    console.log('Done!');
  } // Результат: 1 2 3 Done!
  // 3. Обробка циклу паралельно
  // Цей код може запустити кілька delayLog завдань паралельно. Але будьте обережні з великими масивами.
  // Занадто багато завдань може бути занадто важко для CPU і пам'яті.
  async function processArray(array) {
    // Робимо "map" масиву в проміси
    const promises = array.map(delayedLog);
    // Чекаємо коли всі проміси будуть виконані
    await Promise.all(promises);
    console.log('Done!');
  }
  // Не плутайте "паралельні завдання" з прикладу з реальною паралельністю та потоками. Цей код не
  // гарантує паралельного виконання. Все залежатиме від тіла циклу (у прикладі це delayedLog).
  // Запити мережі, webworkers і деякі інші завдання можуть бути виконані паралельно.
});



// ...
(function () {

})();
