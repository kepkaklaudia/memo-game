import { useEffect } from "react";

export const useLogic = (images) => {

  const prepareCards = () =>{
    console.log(images)
  }
  useEffect(()=>{
    if(images.length > 0 ) prepareCards();
  }, [images]);

}