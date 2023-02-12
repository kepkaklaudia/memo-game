import { useEffect, useState } from "react";
import { addUniqueId, getFormedData, getPairedImages, shuffleCards } from "./gameFunctions";

export const useLogic = (images) => {
  const [cards, setCards] = useState([])
  const [visibleCards, setVisibleCards] = useState([])
  const maxVisibleCards = 2;

  const prepareCards = () => {
    const a = getFormedData(images);
    const b = getPairedImages(a);
    const c = addUniqueId(b);
    const d = shuffleCards(c);
    setCards(d);
  }

  const flipCard = (clickedCardId) => {
    const flippedCards = cards.map(card => {
      if (card.uniqueId === clickedCardId) {
        card.isShown = true
      }

      if (card.isShown) {
        setVisibleCards(oldState => [...oldState, card.uniqueId]);
      }

      return card;
    })

    setCards(flippedCards);
  }

  const onCardClick = clickedCardId => {
    if (visibleCards.length < maxVisibleCards) {
      flipCard(clickedCardId)
    };
  }

  useEffect(() => {
    if (images.length > 0)
      prepareCards();
  }, [images]);

  return { cards, onCardClick };
}