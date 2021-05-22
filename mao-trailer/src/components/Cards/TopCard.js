import React from "react";
import "../../styles/TopCard.style.scss";
import applicationHelper from "../../helpers/applicationHelper";
import { useHistory, useRouteMatch } from "react-router-dom";

const TopCard = ({ name, image, id, backurl = "" }) => {
  const handleName = applicationHelper.addSuffixToString;
  const history = useHistory();
  const match = useRouteMatch();
  const handleClick = (e) => {
    const { path } = match;

    if (!path.includes("detail")) {
      if (backurl === "tv") {
        history.push(`/tv/detail/${id}`);
      } else {
        history.push(`/movies/detail/${id}`);
      }
    }
  };

  return (
    <div onClick={(e) => handleClick(e)} className="movie-top-card">
      <div className="movie-top-card-img">
        <img src={image} alt="" />
      </div>
      {name && <span>{handleName(name, 17, "...")}</span>}
    </div>
  );
};

export default React.memo(TopCard);
