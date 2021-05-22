import React from "react";
import "../../styles/NowCard.style.scss";
import { useHistory } from "react-router-dom";
import applicationHelper from "../../helpers/applicationHelper";
const NowCard = ({ name = "", image, id }) => {
  const history = useHistory();
  const handleName = applicationHelper.addSuffixToString;

  const handleClick = (e) => {
    history.push(`/movies/nowlist/detail/${id}`);
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
