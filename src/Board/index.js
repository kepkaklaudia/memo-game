import { useEffect, useState } from "react";
import { useImages } from "../useImages"
import { Cards } from "./Cards";
import { Loader } from "./Loader";
import { useLogic } from "./useLogic";

export const Board = ({ gameSettings }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useImages(gameSettings);
  const {cards, onCardClick} = useLogic(images);

  useEffect(() => {
    if (images.length > 0) setIsLoading(false);
  }, [images]);

  return (
    <>
      {isLoading ? <Loader /> : <div>
        {cards.map(card => <Cards key={card.uniqueId} card={card} onCardClick={onCardClick} />)}
      </div>}
    </>
  )
}