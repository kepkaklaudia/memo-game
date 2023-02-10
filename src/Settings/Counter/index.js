import { Arrow, Button } from "./styled";

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
    <>
      <Button
        onClick={decrement}
      >
        <Arrow decrement />
      </Button>
      {cardsCount}
      <Button
        onClick={increment}
      >
        <Arrow />
      </Button>
    </>
  );
}