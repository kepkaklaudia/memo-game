export const getFormedData = (data) =>(
  data.map((picture, index) => ({
    id: index,
    url: picture.src.small,
    isShown: false,
    isfound: false,
  }))
);