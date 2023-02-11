export const getFormedData = (data) =>(
  data.map((picture, index) => ({
    id: index,
    url: picture.src.small,
    isShown: false,
    isfound: false,
  }))
);
//Duplicate each image
export const getPairedImages = (data) => (
  data.reduce((picture, i) => picture.concat(i, i), [])
)