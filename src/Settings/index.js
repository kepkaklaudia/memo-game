import { categories, initialCardsCount } from "./constants";
import { RadioBox } from "./RadioBox";
import { Heading, BoxWrapper } from "./styled";
import { useState } from "react";
import { Counter } from "./Counter";
import { Wrapper } from "../common/Wrapper";
import { Button } from "../common/Button";

export const Settings = ({ startGame }) => {
  const [category, setCategory] = useState(categories[0]);
  const [cardsCount, setCardsCount] = useState(initialCardsCount);

  const onStartClick = () => {
    startGame({ category, cardsCount });
  };

  return (
    <Wrapper>
      <Heading>
        Settings
      </Heading>
      <h3>
        Category:
      </h3>
      <BoxWrapper
        responsive
      >
        {categories.map(item => (
          <RadioBox
            key={item}
            name={item}
            selectedItem={category}
            onChange={event => setCategory(event.target.value)}
          />
        ))}
      </BoxWrapper>
      <h3>
        Amount of cards:
      </h3>
      <BoxWrapper>
        <Counter
          cardsCount={cardsCount}
          onClick={setCardsCount}
        />
      </BoxWrapper>
      <Button
        onClick={onStartClick}
      >
        Start
      </Button>
    </Wrapper>
  )
};