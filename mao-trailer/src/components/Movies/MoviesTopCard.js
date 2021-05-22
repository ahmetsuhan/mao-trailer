import React from "react";
import "../../styles/MovieTopCard.style.scss";
import applicationHelper from "../../helpers/applicationHelper";
import { useHistory, useRouteMatch } from "react-router-dom";

const MoviesTopCard = ({ movieName, movieImage, movieId }) => {
  const handleName = applicationHelper.addSuffixToString;
  const history = useHistory();
  const match = useRouteMatch();
  const handleClick = (e) => {
    const { path } = match;

    if (!path.includes("detail")) {
      history.push(`/movies/detail/${movieId}`);
    }
  };

  return (
    <div onClick={(e) => handleClick(e)} className="movie-top-card">
      <div className="movie-top-card-img">
        <img src={movieImage} alt="" />
      </div>
      {movieName && <span>{handleName(movieName, 17, "...")}</span>}
    </div>
  );
};

export default React.memo(MoviesTopCard);
