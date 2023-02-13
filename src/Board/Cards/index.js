import { Wrapper, Card, Side, Image } from "./styled"

export const Cards = ({ card, onCardClick }) => {
  const onClick = () => {
    if (card.isShown || card.isFound)
      return;
    onCardClick(card.uniqueId);
  };

  return (
    <Wrapper
      onClick={onClick}
    >
      <Card
        flipped={card.isShown}
      >
        <Side
          front
          found={card.isFound}
        />
        <Side
          back
        >
          <Image
            alt=""
            src={card.url}
            width="150"
          />
        </Side>
      </Card>
    </Wrapper>
  )
};