import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import "../../styles/PopularCard.style.scss";
import applicationHelper from "../../helpers/applicationHelper";
const PopularCard = ({ image, year, name = "", point, id }) => {
  const history = useHistory();
  const { path } = useRouteMatch();

  let cardPoint = parseFloat(point).toString().split(".");

  const handleName = applicationHelper.addSuffixToString;

  const handleClick = (e) => {

     if (path.includes("tv")) {
      history.push(`/tv/popularlist/detail/${id}`);
    } else {
      history.push(`/movies/popularlist/detail/${id}`);
    }
  };

  return (
    <div onClick={(e) => handleClick(e)} className="popular-movie-card">
      <div className="movie-card-img">
        <img src={image} alt="" />
      </div>

      <p className="movie-point">
        {cardPoint[0]}
        <sup>
          <small>.{cardPoint[1]}</small>
        </sup>
      </p>
      <div className="footer">
        <span>{year.split(" ")[0]}</span>
        <p>{handleName(name, 14, "...")}</p>
      </div>
    </div>
  );
};

export default React.memo(PopularCard);
