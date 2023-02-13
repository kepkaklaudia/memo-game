import { Wrapper } from "./styled";

export const Result = ({restartGame}) => (
  <Wrapper>
    Awesome!
    <button onClick={restartGame}>Finish Game</button>
  </Wrapper>
)