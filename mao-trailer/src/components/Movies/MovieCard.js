import React from "react";
import "../../styles/MovieCard.style.scss";
const MovieCard = ({ movieImage }) => {
  return (
    <div className="movie-card">
      <div className="movie-card-img">
        <img src={movieImage} alt="" />
      </div>
    </div>
  );
};

export default React.memo(MovieCard);
