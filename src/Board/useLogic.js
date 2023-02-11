import { useEffect } from "react";
import { getFormedData } from "./gameFunctions";

export const useLogic = (images) => {

  const prepareCards = () =>{
    const a = getFormedData(images);
  }
  useEffect(()=>{
    if(images.length > 0 ) prepareCards();
  }, [images]);

}