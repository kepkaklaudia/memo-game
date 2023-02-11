import { useEffect } from "react";
import { getFormedData, getPairedImages } from "./gameFunctions";

export const useLogic = (images) => {

  const prepareCards = () => {
    const a = getFormedData(images);
    const b = getPairedImages(a);
  }

  useEffect(() => {
    if (images.length > 0) prepareCards();
  }, [images]);

}