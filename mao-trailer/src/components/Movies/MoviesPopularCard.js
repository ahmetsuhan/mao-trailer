import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/PopularMovieCard.style.scss";
import applicationHelper from "../../helpers/applicationHelper";
const MoviesPopularCard = ({
  movieImage,
  movieYear,
  movieName = "",
  moviePoint,
  movieId,
}) => {
  const history = useHistory();

  let point = parseFloat(moviePoint).toString().split(".");

  const handleName = applicationHelper.addSuffixToString;

  const handleClick = (e) => {
    history.push(`/movies/popularlist/detail/${movieId}`);
  };

  return (
    <div onClick={(e) => handleClick(e)} className="popular-movie-card">
      <div className="movie-card-img">
        <img src={movieImage} alt="" />
      </div>

      <p className="movie-point">
        {point[0]}
        <sup>
          <small>.{point[1]}</small>
        </sup>
      </p>
      <div className="footer">
        <span>{movieYear.split(" ")[0]}</span>
        <p>{handleName(movieName, 14, "...")}</p>
      </div>
    </div>
  );
};

export default React.memo(MoviesPopularCard);
