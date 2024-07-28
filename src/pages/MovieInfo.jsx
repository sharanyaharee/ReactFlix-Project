import React from "react";
import { useFetch } from "../Hooks/useFetch";
import { useParams } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import MovieDetails from "../components/MovieDetails";

const MovieInfo = () => {
  let { id } = useParams();
  let [data, loading, error] = useFetch(`movie/${id}`);
  console.log(data);

  const backdrop = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`,
  };

  return (
    <div className="moviePage" style={backdrop}>
      <Wrapper>
        {loading && <Loader />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!error && !loading && (
          <div className="movieContent">
            <div className="moviePoster">
              <img
                src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                alt=""
              />
            </div>
            {/* {console.log("moviedetails data is,", data)} */}
            <div className="movieInfo">
              <div className="movieTitle">
                <h1>{data?.title}</h1>
                <h3>{data?.tagline}</h3>
              </div>
              <div className="moviePlot"> {data?.overview}</div>
              <div className="movieDetails">
                <div className="movieDetailsItem">
                  <h3>Language</h3>
                  <div>
                    {data?.spoken_languages?.map(({id,english_name}) => {
                      return <span key={id}>{english_name}</span>;
                    })}
                  </div>
                </div>
                <div className="movieDetailsItem">
                  <h3>Genre</h3>
                  <div>
                    {data?.genres?.map(({id,name}) => {
                      return <span key={id}>{name}</span>;
                    })}
                  </div>
                </div>
                <div className="movieDetailsItem">
                  <h3>Runtime</h3>
                  <div>{data.runtime} Minutes</div>
                </div>
                <div className="movieDetailsItem">
                  <h3>Rating</h3>
                  <div>{data.vote_average}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default MovieInfo;
