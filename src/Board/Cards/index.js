import { Image } from "./Image"
import { Wrapper, Card, Front, Back } from "./styled"

export const Cards = ({ card, onCardClick }) => {
  const onClick = () => {
    onCardClick(card.uniqueId)
  }

  return (
    <Wrapper onClick={onClick}>
      <Card>
        <Front />
        <Back>
          <Image url={card.url} />
        </Back>
      </Card>
    </Wrapper>
  )
}