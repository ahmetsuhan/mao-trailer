import React from "react";
import "../../../styles/MoviePopup.style.scss";
import TopCard from "../../Cards/TopCard";
const MoviePopup = ({ show, onToggle, movieImage, movieSubject }) => {
  return (
    <div className={`movie-popup ${show && "active moveup"}`}>
      <div className="container">
        <div className="top">
          <span>Introduction</span>
          <span onClick={onToggle}>X</span>
        </div>

        <div className="content">
          <div>
            <div className="img-area">
              <TopCard image={movieImage} />
            </div>
            <div className="description">
              <p>{movieSubject}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MoviePopup);
