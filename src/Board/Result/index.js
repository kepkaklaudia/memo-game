import { Wrapper } from "../../common/Wrapper";
import { Button } from "../../common/Button";

export const Result = ({ restartGame }) => (
  <Wrapper
    result
  >
    Awesome!
    <Button
      result
      onClick={restartGame}
    >
      Finish Game
    </Button>
  </Wrapper>
);