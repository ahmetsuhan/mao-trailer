import React from "react";
import { withRouter } from "react-router";
import MovieDetailFooter from "../../components/Movies/MovieDetailFooter";
import "../../styles/MovieDetailPage.style.scss";
import { connect, useSelector } from "react-redux";
import { getMovieById } from "../../store/movie/movieUtils";

import applicationHelper from "../../helpers/applicationHelper";
import urlRoutingHelper from "../../helpers/urlRoutingHelper";
import MoviePopup from "../../components/Movies/MoviePopup";
import { useToggle } from "../../hooks/useToggle";
import MovieCard from "../../components/Movies/MovieCard";
import Star from "../../components/Star";

const MovieDetailPage = ({ match, movies, history }) => {
  const { id } = match.params;

  const [showPopup, setShowPopup] = useToggle(false);

  const tv = useSelector((state) => state.tv.tvies);

  const handleDataByPath = (path) => {
    if (path.includes("tv")) {
      return tv;
    }
    return movies;
  };

  const {
    MovieImage,
    MovieName,
    MovieType,
    MovieSubject,
    MoviePlayer,
    moviePoint,
  } = getMovieById(id, handleDataByPath(match.path));

  const handlePlayersRender = (moviePlayers = "") => {
    const players = moviePlayers.split(",");

    return players.map((p, i) => {
      return (
        <div key={i} className="player">
          <div className="player-img">
            <img src={MovieImage} alt="" />
          </div>
          <p className="player-name">{handleDescription(p, 14, "...")}</p>
          <span className="player-role">Director</span>
        </div>
      );
    });
  };

  const point = String(parseFloat(moviePoint)).split(".");

  const handleDescription = applicationHelper.addSuffixToString;

  const handleNavClick = (e) => {
    const { target } = e;
    const targetParentElement = target.parentElement;
    const targetParentClass = targetParentElement.classList;
    if (
      targetParentClass.contains("back-btn") ||
      targetParentClass.contains("left")
    ) {
      urlRoutingHelper.handleBacksBtnRouting(history);
    }

    if (
      targetParentClass.contains("right") ||
      targetParentClass.contains("share-btn")
    ) {
      alert("share!!!!");
    }
  };

  const toggleMoviePopup = (e) => {
    setShowPopup((prev) => (prev = !prev));
  };

  const handleClickPlayBtn = () => {
    if (match.path.includes("tv")) {
      history.push(`/tv/detail/${id}/playview`);
    } else {
      history.push(`/movies/detail/${id}/playview`);
    }
  };

  return (
    <div className="movie-detail-page">
      <div className="header">
        <div className="bg-image">
          <img src={MovieImage} alt="" />
          <nav className="top-nav">
            <div onClick={(e) => handleNavClick(e)} className="left">
              <svg
                className="back-btn"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.70715 16.2072C9.31662 15.8166 9.31662 15.1835 9.70715 14.793L18.8134 5.68673C19.1958 5.30428 19.8131 5.29523 20.2065 5.66631L20.4793 5.92352C20.8873 6.30828 20.8992 6.95328 20.5056 7.35281L12.4801 15.5001L20.5122 23.6091C20.9036 24.0042 20.8974 24.6426 20.4986 25.0301L20.207 25.3133C19.8149 25.6942 19.1896 25.6897 18.8031 25.3031L9.70715 16.2072Z"
                  fill="#fff"
                />
                <rect opacity="0.01" width="30" height="30" fill="white" />
              </svg>
              <span className="back-btn">Back</span>
            </div>
            <div onClick={(e) => handleNavClick(e)} className="right">
              <svg
                className="share-btn"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.95 15.4997C23.3704 15.4997 22.9 15.9694 22.9 16.5504C22.9 16.6736 22.9 16.8997 22.9 16.8997V22.4992C22.9 23.2734 22.2735 23.8999 21.5 23.8999H7.5C6.7265 23.8999 6.1 23.2734 6.1 22.4992V8.49942C6.1 7.72659 6.7265 7.09937 7.5 7.09937H13.1C13.1 7.09937 13.3268 7.09937 13.45 7.09937C14.0296 7.09937 14.5 6.62895 14.5 6.05003C14.5 5.46902 14.0296 5 13.45 5C13.3268 5 13.1 5 13.1 5H6.8C5.2537 5 4 6.25374 4 7.79939V23.1999C4 24.747 5.2537 26 6.8 26H22.2C23.7463 26 25 24.7463 25 23.1992V16.899C25 16.899 25 16.6729 25 16.5497C25 15.9694 24.5296 15.4997 23.95 15.4997Z"
                  fill="white"
                />
                <path
                  d="M25.6773 9.07359L23.081 6.33983C22.6507 5.88672 21.9531 5.88672 21.5235 6.33983C21.0932 6.79293 21.0932 7.52597 21.5235 7.9798L22.3965 8.89899H20.1853C15.4456 8.89899 11.555 12.658 11.0164 17.4957C10.9644 17.6255 11.0527 18.2215 11.0527 18.2215C11.2302 18.6299 11.5159 19 11.9627 19C12.9158 19 13.0077 18.2785 13.0077 18.2785C13.1879 14.2633 16.3275 11.0642 20.1853 11.0642H24.6392C24.6392 11.0642 24.8166 11.0498 24.9064 11.0498C25.1853 11.0491 25.4642 10.938 25.6773 10.7143C26.1076 10.2605 26.1076 9.5267 25.6773 9.07359Z"
                  fill="white"
                />
                <rect opacity="0.01" width="30" height="30" fill="white" />
              </svg>
            </div>
          </nav>

          <div onClick={handleClickPlayBtn} className="movie-play-btn">
            <div className="oval">
              <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.2864 7.304C14.5397 8.08734 14.5397 9.91266 13.2864 10.696L3.06 17.0875C1.7279 17.9201 0 16.9624 0 15.3915L0 2.6085C0 1.03763 1.7279 0.0799387 3.06 0.912499L13.2864 7.304Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <span className="movie-title">{MovieName}</span>
          <div className="small-card-area">
            <MovieCard movieImage={MovieImage} />
          </div>
        </div>

        <section className="content">
          <div className="movie-info">
            <p>
              <b>3,295</b>
              <span>People watching</span>
            </p>
            <p>{MovieType}</p>

            <div className="movie-point">
              <span>
                {point[0]}
                <sup>.{point[1]}</sup>
              </span>
              <div className="movie-stars">
                <Star filled />
                <Star filled />
                <Star filled />
                <Star filled />
                <Star filled />
              </div>
            </div>
          </div>
          <div className="movie-description">
            <p>
              {handleDescription(MovieSubject, 120, "...")}{" "}
              <span onClick={(e) => toggleMoviePopup(e)}>More</span>
            </p>
          </div>
        </section>
        <section className="movie-players">
          <span className="section-title">Full Cast & Crew</span>

          <div className="container">
            <div className="scroll-row">
              <div className="asd">{handlePlayersRender(MoviePlayer)}</div>
            </div>
          </div>
        </section>
      </div>

      <MovieDetailFooter movieId={id} />
      <MoviePopup
        movieSubject={MovieSubject}
        movieImage={MovieImage}
        show={showPopup}
        onToggle={toggleMoviePopup}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movie.movies,
  };
};

export default connect(mapStateToProps)(
  withRouter(React.memo(MovieDetailPage))
);
