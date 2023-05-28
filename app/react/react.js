// Якщо ініціюється важка операція в useState, то її варто обернути в функцію,
// тоді не буде відбуватися зайвих операцій в рендерингу.
(function () {
  // const [numbers, setNumbers] = useState(() => [1, 2, 3]);
});



// Якщо в мемонізований компонент нічого не пердавати або передавати примітиви, то він буде
// мемонізуватися, але якщо передати туди об'єкт чи масив, тоді момонізація не працюватиме і
// буде відбуватися ререндеринг. Щоб цього уникнути варто передвати мемонізований об'єкт або масив,
// такі дані мемонізуються за допомогою хука useMemo.
(function () {
  import { useState, useMemo, memo } from 'react';
  import './styles.css';

  const List = ({ data }) => {
    console.log('Render List');

    return (
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  const MemoList = memo(List);

  export default function App() {
    console.log('Render App');

    const [value, setValue] = useState(0);

    // const list = ['One', 'Two', 'Three'];
    const memolist = useMemo(() => ['One', 'Two', 'Three'], []);

    return (
      <div className="App">
        <button onClick={() => setValue(value + 1)}>Click</button>

        <MemoList data={memolist} />
      </div>
    );
  }
})();



// Мемозація компоненту.Компонент не буде перерендерено при кліку на бутон. Але це працює
// якщо в мемонізований компонент передавати примітивні типи даних, якщо передавати
// силочні типи даних (об'єкт, функція), то мемонізація працювати не буде.
//
// Тут перший рендер відбувається два рази, це через те що використовується StrictMode
(function () {
  import React, { StrictMode, useState } from "react";
  import { createRoot } from "react-dom/client";

  function Movie({ title, releaseDate, memo }) {
    console.log("Render Movie");

    return (
      <div>
        <div>Movie title: {title}</div>
        <div>Release date: {releaseDate}</div>
      </div>
    );
  }

  const MemoizedMovie = React.memo(Movie);
  // const MemoizedMovie = Movie;

  function App() {
    const [value, setValue] = useState(true);

    return (
      <>
        <button onClick={() => setValue(!value)}>Click</button>
        <span>Current Value: {value.toString()}</span>

        <br />
        <br />

        <MemoizedMovie title="Heat" releaseDate="December 15, 1995" memo={true} />
      </>
    );
  }

  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});



// ...
(function () {

})();
