import { useEffect } from "react";
import { addUniqueId, getFormedData, getPairedImages } from "./gameFunctions";

export const useLogic = (images) => {

  const prepareCards = () => {
    const a = getFormedData(images);
    const b = getPairedImages(a);
    const c = addUniqueId(b);
  }

  useEffect(() => {
    if (images.length > 0) prepareCards();
  }, [images]);

}