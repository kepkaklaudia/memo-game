import { categories } from "./constants";
import { RadioBox } from "./RadioBox";
import { Wrapper, Heading, BoxWrapper } from "./styled";
import { useState } from "react";

export const Settings = () => {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Wrapper>
      <Heading>Settings</Heading>
      <h3>Category: </h3>
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
    </Wrapper>
  )
};