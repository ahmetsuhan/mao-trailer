import React from "react";
import "../../styles/NowMovieCard.style.scss";
import { useHistory } from "react-router-dom";
import applicationHelper from "../../helpers/applicationHelper";
const MoviesNowCard = ({ movieName = "", movieImage, movieId }) => {
  const history = useHistory();
  const handleName = applicationHelper.addSuffixToString;

  const handleClick = (e) => {
    history.push(`/movies/nowlist/detail/${movieId}`);
  };

  return (
    <div onClick={(e) => handleClick(e)} className="movie-card">
      <div className="movie-card-img">
        <img src={movieImage} alt="" />
      </div>
      <span>{handleName(movieName, 14, "...")}</span>
    </div>
  );
};

export default React.memo(MoviesNowCard);
