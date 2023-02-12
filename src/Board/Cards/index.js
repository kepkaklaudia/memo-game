import { Image } from "./Image"
import { Wrapper, Card, Side } from "./styled"

export const Cards = ({ card, onCardClick }) => {
  const onClick = () => {
    onCardClick(card.uniqueId)
  }

  return (
    <Wrapper onClick={onClick}>
      <Card flipped={card.isShown} >
        <Side front found={card.isFound} />
        <Side back>
          <Image url={card.url} />
        </Side>
      </Card>
    </Wrapper>
  )
}