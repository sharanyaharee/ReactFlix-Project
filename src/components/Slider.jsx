import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { splideOptions } from "../utils/splideOptions";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { useFetch } from "../Hooks/useFetch";

const Slider = () => {
  const [data, loading, error] = useFetch("movie/now_playing", {});
  const { results } = data;
  // const [latestMovies, setLatestMovie] = useState([]);
  // const [loading,setLoading]= useState(true)
  // useEffect(() => {
  //   const fetchData = async () => {

  //       let { data } = await axios({
  //         method: "get",
  //         url: "https://api.themoviedb.org/3/movie/now_playing",
  //         params: {
  //           api_key: "e3ef60114f3455d412ea55db83f798b2",
  //         },
  //       });

  //       setLatestMovie(data.results);
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 3000);

  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="movieSlider">
      {loading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!error && !loading && (
        <Splide options={splideOptions}>
          {results?.map(({ backdrop_path, title, id }) => {
            return (
              <SplideSlide key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
                  alt={title}
                />
                <div className="slideCaption">
                  <h2>{title} </h2>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      )}
    </div>
  );
};

export default Slider;
