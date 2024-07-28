import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { useState, useEffect } from "react";

export const sliderFetch = (url, customParams = {}) => {
  const [latestMovies, setLatestMovies] = useState({});
  const [error, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "get",
    baseURL: "https://api.themoviedb.org/3/",
    url: url,
    params: {
      api_key: "e3ef60114f3455d412ea55db83f798b2",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let {data} = await axios(options);
        setLatestMovies(data);
        setTimeout(() => {
        setLoading(false);
    }, 1000);
      } catch (error) {
        setErrorMessage(error.message);
       
          setLoading(false);
   
      }
    };
    fetchData();
  }, []);

  return[latestMovies,loading,error]
};
