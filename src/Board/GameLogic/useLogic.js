import { useEffect, useState } from "react";
import { addUniqueId, getFormedData, getPairedImages, shuffleCards } from "./gameFunctions";

export const useLogic = (images) => {
  const [score, setScore] = useState(0)
  const [isWin, setIsWin] = useState(false)
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

  const updateScore = () => {
    setScore(oldScore => oldScore + 1)
  }

  const checkMatch = () => {
    const visible = cards.filter(card => visibleCards.indexOf(card.uniqueId) !== -1)
    const matched = visible[0].id === visible[1].id;

    const updatedCards = cards.map(card => {
      if (visibleCards.indexOf(card.uniqueId) !== -1) {
        card.isShown = false
        card.isFound = matched;
      }
      return card;
    });

    setTimeout(() => {
      setCards(updatedCards);
      setVisibleCards([]);
      if (matched) updateScore();
    }, 1000);
  }

  useEffect(() => {
    if (images.length > 0)
      prepareCards();
  }, [images]);

  useEffect(() => {
    if (visibleCards.length >= maxVisibleCards) {
      checkMatch();
    }
  }, [visibleCards]);

  useEffect(() => {
    if (images.length && score === images.length) {
      setIsWin(true);
    }
  }, [score]);

  return { cards, onCardClick, isWin };
}