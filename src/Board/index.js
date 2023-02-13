import { useEffect, useState } from "react";
import { useImages } from "../useImages"
import { Cards } from "./Cards";
import { Loader } from "./Loader";
import { Result } from "./Result";
import { Wrapper } from "./styled";
import { useLogic } from "./useLogic";

export const Board = ({ gameSettings, restartGame }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useImages(gameSettings);
  const {cards, onCardClick, isWin} = useLogic(images);

  useEffect(() => {
    if (images.length > 0) setIsLoading(false);
  }, [images]);

  return (
    <>
    {isWin && <Result restartGame={restartGame} />}
      {isLoading ? <Loader /> : <Wrapper>
        {cards.map(card => <Cards key={card.uniqueId} card={card} onCardClick={onCardClick} />)}
      </Wrapper>}
    </>
  )
}