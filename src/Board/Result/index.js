import { Wrapper } from "../../common/Wrapper";
import { Button } from "../../common/Button";

export const Result = ({ restartGame }) => (
  <Wrapper
    final
  >
    Awesome!
    <Button
      final
      onClick={restartGame}
    >
      Finish Game
    </Button>
  </Wrapper>
);