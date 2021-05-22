import React from "react";
import { useRouteMatch } from "react-router-dom";
import PopularCard from "../../Cards/PopularCard";

import { connect, useSelector } from "react-redux";

const PopularList = ({ popular }) => {
  const { path, url } = useRouteMatch();
  const tv = useSelector((state) => state.tv.popularTvies);
  let title = "Popular List";
  if (!popular[0]) {
    return <h1>Loading....</h1>;
  } else if (!tv[0]) {
    return <h1>Loading....</h1>;
  }

  const handleTitle = (url, title) => {
    if (url.includes("movies-all")) {
      title = "Movie List";
    }
    return title;
  };

  return (
    <>
      <span>{handleTitle(url, title)}</span>
      <div className="movies">
        {path.includes("movies") &&
          popular.map((d, i) => {
            return (
              <div key={i} className="popularlist-card-area">
                <PopularCard
                  id={d.movieId}
                  image={d.MovieImage}
                  name={d.MovieName}
                  year={d.MovieYear}
                  point={d.moviePoint}
                />
              </div>
            );
          })}

        {path.includes("tv") &&
          tv.map((d, i) => {
            return (
              <div key={i} className="popularlist-card-area">
                <PopularCard
                  id={d.movieId}
                  image={d.MovieImage}
                  name={d.MovieName}
                  year={d.MovieYear}
                  point={d.moviePoint}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    popular: state.movie.popular,
  };
};
export default connect(mapStateToProps)(React.memo(PopularList));