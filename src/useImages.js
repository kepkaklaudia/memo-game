import axios from "axios";
import { useState, useEffect } from "react";

export const useImages = () => {
  const [images, setImages] = useState([]);
  const getRandomPage = () => Math.floor(Math.random() * 10) + 1;

  const buildURL = () => {
    let url = new URL("https://api.pexels.com/v1/search");

    url.search = new URLSearchParams({
      query: "space", //tochange
      orientation: "square",
      size: "small",
      per_page: 2, //tochange
      page: getRandomPage(),
    })
    return url;
  };

  const getData = async () => {
    try {
      const response = await axios({
        url: buildURL(),
        headers: {
          Authorization: process.env.REACT_APP_API_KEY
        }
      });
      setImages(response.data.photos);
    } catch (error) {
      console.error("Something bad happened!");
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return images;
};
