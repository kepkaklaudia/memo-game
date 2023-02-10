import { categories, initialCardsCount } from "./constants";
import { RadioBox } from "./RadioBox";
import { Wrapper, Heading, BoxWrapper } from "./styled";
import { useState } from "react";
import { Counter } from "./Counter";

export const Settings = () => {
  const [category, setCategory] = useState(categories[0]);
  const [cardsCount, setCardsCount] = useState(initialCardsCount);

  return (
    <Wrapper>
      <Heading>
        Settings
      </Heading>
      <h3>
        Category:
      </h3>
      <BoxWrapper>
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
    </Wrapper>
  )
};