import { useEffect, useState } from "react";
import { useImages } from "../useImages"
import { Loader } from "./Loader";
import { useLogic } from "./useLogic";

export const Board = ({ gameSettings }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useImages(gameSettings);
  const cards = useLogic(images);

  useEffect(() => {
    if (images.length > 0) setIsLoading(false);
  }, [images]);

  return (
    <>
      {isLoading ? <Loader /> : <div></div>}
    </>
  )
}