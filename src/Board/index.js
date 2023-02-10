import { useEffect, useState } from "react";
import { useImages } from "../useImages"
import { Loader } from "./Loader";

export const Board = ({ gameSettings }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useImages(gameSettings);

  useEffect(() => {
    if (images.length > 0) setIsLoading(false);
  }, [images]);

  return (
    <>
      {isLoading ? <Loader /> : <div></div>}
    </>
  )
}