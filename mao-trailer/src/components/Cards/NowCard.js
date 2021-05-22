import React from "react";
import "../../styles/NowCard.style.scss";
import { useHistory, useRouteMatch } from "react-router-dom";
import applicationHelper from "../../helpers/applicationHelper";
const NowCard = ({ name = "", image, id }) => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const handleName = applicationHelper.addSuffixToString;

  const handleClick = (e) => {
    if (path.includes("tv")) {
      history.push(`/tv/nowlist/detail/${id}`);
    } else {
      history.push(`/movies/nowlist/detail/${id}`);
    }
  };

  return (
    <div onClick={(e) => handleClick(e)} className="movie-card">
      <div className="movie-card-img">
        <img src={image} alt="" />
      </div>
      <span>{handleName(name, 14, "...")}</span>
    </div>
  );
};

export default React.memo(NowCard);
