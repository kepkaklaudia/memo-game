export const getFormedData = data => (
  data.map((picture, index) => ({
    id: index,
    url: picture.src.small,
    isShown: false,
    isfound: false,
  }))
);

// Duplicate each image
export const getPairedImages = data => (
  data.reduce((picture, i) => picture.concat(i, i), [])
);

// UniqueId to shuffle cards
export const addUniqueId = data => (
  data.map((oldArray, i) => ({
    ...oldArray,
    uniqueId: i,
  }))
);

export const shuffleCards = cards => {
  let m = cards.length;
  let t;
  let i;

  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element
    t = cards[m];
    cards[m] = cards[i];
    cards[i] = t;
  }

  return cards;
};