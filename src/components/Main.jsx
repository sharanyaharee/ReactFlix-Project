import React from "react";
import MovieCard from "./MovieCard";
import Wrapper from "./Wrapper";
import { popularMovies } from "../utils/data";
function Main() {
  return (
    <main>
      <div className="movieSlider">
        <p style={{ textAlign: "center" }}>Movie Slider Goes Here</p>
        <Wrapper>
          <h2 className="sectionTitle">Popular Movies </h2>
          <div className="gallery">
            {popularMovies.map(movie => <MovieCard key={movie.id}  movie={movie} />)}
          </div>
        </Wrapper>
      </div>
    </main>
  );
}

export default Main;
