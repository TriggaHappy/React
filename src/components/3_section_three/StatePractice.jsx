import React from 'react';

export default function StatePractice() {
  // const [count, setCount] = React.useState(0);
  // const [isGoingOut, setIsGoingOut] = React.useState(true);
  const [myFavoriteThings, setMyFavoritThings] = React.useState([]);
  const allFavoriteThings = [
    '💦🌹',
    '😺',
    '💡🫖',
    '🔥🧤',
    '🟤🎁',
    '🐴',
    '🍎🥧',
    '🚪🔔',
    '🛷🔔',
    '🥩🍝',
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    setMyFavoritThings((prevFavThings) => [
      ...prevFavThings,
      allFavoriteThings[prevFavThings.length],
    ]);
  }
  //
  // function add() {
  //   setCount((prevCount) => prevCount + 1);
  // }
  //
  // function subtract() {
  //   setCount((prevCount) => prevCount - 1);
  // }
  //
  // function flip() {
  //   // setIsGoingOut((prevIsGoingOut) => (prevIsGoingOut ? false : true));
  //   setIsGoingOut((prevIsGoingOut) => !prevIsGoingOut);
  // }
  // return (
  //   <main className="">
  //     <h1 className="">How many times will Bob say "state" in this section?</h1>
  //     <div className="counter">
  //       <button
  //         onClick={subtract}
  //         className="minus"
  //         aria-label="Decrease count"
  //       >
  //         –
  //       </button>
  //       <h2 className="count">{count}</h2>
  //       <button onClick={add} className="plus" aria-label="Increase count">
  //         +
  //       </button>
  //     </div>
  //     <h1 className="title">Do I feel like going out tonight?</h1>
  //   </main>
  // );
  //
  // return (
  //   <main className="">
  //     <button
  //       onClick={flip}
  //       className="value"
  //       aria-label={`Current answer is ${isGoingOut ? 'yes' : 'no'}`}
  //     >
  //       {isGoingOut ? 'yes' : 'no'}
  //     </button>
  //   </main>
  // );

  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
}
