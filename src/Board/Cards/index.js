import { Image } from "./Image"
import { Wrapper, Card, Front, Back } from "./styled"

export const Cards = ({ card }) => {
  return (
    <Wrapper>
      <Card />
      <Front />
      <Back />
      <Image url={card.url} />
    </Wrapper>
  )
}