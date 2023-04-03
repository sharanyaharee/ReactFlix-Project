import React from "react";

function MovieCard({ movie: {title,rating,poster_path} }) {
  return (
    <div className="movieCard">
      <img className="moviePoster" src={poster_path} alt="" />
      <div className="movieCardFooter">
        <div className="movieCardDetails">
          <h2 className="movieCardTitle">{title}</h2>
          <p className="movieCardRating">{rating}</p>
        </div>
        <div className="favButton">#</div>
      </div>
    </div>
  );
}

export default MovieCard;
