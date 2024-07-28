import Slider from "../components/Slider";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Pagination from "../components/Pagination";
import Wrapper from "../components/Wrapper";
import MovieCard from "../components/MovieCard";
import { useFetch } from "../Hooks/useFetch";
import { AppContext } from "../context/appContext";
import { useContext } from "react";


const Home = () => {
   const {state:{page}}= useContext(AppContext)
    const [data, loading, error] = useFetch("movie/popular", { page: page });
    const { results, total_pages } = data;
    // const [popMovies, setPopMovies] = useState([]);
    // const [totalPages, setTotalPages] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       let { data } = await axios({
    //         method: "get",
    //         url: "https://api.themoviedb.org/3/movie/popular",
    //         params: {
    //           api_key: "e3ef60114f3455d412ea55db83f798b2",
    //           page: page,
    //         },
    //       });
    //       setPopMovies(data.results);
    //       setTotalPages(data.total_pages);
    //       setTimeout(() => {
    //         setLoading(false);
    //       }, 1000);
    //     } catch (error) {
    //       setError(error.message);
    //       setLoading(false);
    //     }
    //   };
    //   fetchData();
    // }, [page]);
  return (
    <div>
          <main>
      <Slider />
      <Wrapper>
        {loading && <Loader />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!error && !loading && (
          <>
            <h2 className="sectionTitle">Popular Movies </h2>
            <div className="gallery">
              {results?.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
            <Pagination
              totalPages={total_pages}
            />
          </>
        )}
      </Wrapper>
    </main>
      
    </div>
  )
}

export default Home
