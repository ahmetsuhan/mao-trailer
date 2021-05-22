import React from "react";
import NowList from "../../components/Movies/NowList";
import PopularList from "../../components/Movies/PopularList";
import "../../styles/MoviesMorePage.style.scss";

import urlRoutingHelper from "../../helpers/urlRoutingHelper";

const MoviesMorePage = ({ history, match }) => {
  const handleRenderedList = () => {
    if (match.params.listname === "now-list") {
      return <NowList />;
    }
    if (
      match.params.listname === "popular-list" ||
      match.params.listname === "movies-all" ||
      match.params.listname === "tv-all"
    ) {
      return <PopularList />;
    }
    return null;
  };

  const handleClickBack = () => {
    urlRoutingHelper.handleBacksBtnRouting(history);
  };
  return (
    <div className="movies-more-page">
      <div className="container">
        <div className="top">
          <svg
            onClick={handleClickBack}
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
              fill="#222222"
            />
            <rect opacity="0.01" width="30" height="30" fill="white" />
          </svg>
          <span>Back</span>
        </div>

        <main className="movie-lists">{handleRenderedList()}</main>
      </div>
    </div>
  );
};

export default React.memo(MoviesMorePage);
