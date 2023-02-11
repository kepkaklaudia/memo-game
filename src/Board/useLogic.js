import { useEffect, useState } from "react";
import { addUniqueId, getFormedData, getPairedImages, shuffleCards } from "./gameFunctions";

export const useLogic = (images) => {
  const [cards, setCards] = useState([])

  const prepareCards = () => {
    const a = getFormedData(images);
    const b = getPairedImages(a);
    const c = addUniqueId(b);
    const d = shuffleCards(c);
    setCards(d);
  }
  const onCardClick = uniqueId => {
    console.log(uniqueId);
  }

  useEffect(() => {
    if (images.length > 0) prepareCards();
  }, [images]);

  return { cards, onCardClick };
}