import { categories } from "./constants";
import { RadioBox } from "./RadioBox";
import { Wrapper, Heading, RadioBoxWrapper } from "./styled";

export const Settings = () => (
  <Wrapper>
    <Heading>Settings</Heading>
    <h3>Category: </h3>
    <RadioBoxWrapper>
      {categories.map(category => (
        <RadioBox key={category} name={category} />
      ))}
    </RadioBoxWrapper>
  </Wrapper>
);