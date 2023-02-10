export const Counter = ({ cardsCount, onClick }) => {
  const step = 2;

  const decrement = event => {
    event.preventDefault();
    const number = cardsCount - step;
    if (number >= 2) onClick(number);
  };

  const increment = event => {
    event.preventDefault();
    const number = cardsCount + step;
    if (number <= 100) onClick(number);
  };

  return (
    <div>
      <button
        onClick={decrement}
      >
        -
      </button>
      {cardsCount}
      <button
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}