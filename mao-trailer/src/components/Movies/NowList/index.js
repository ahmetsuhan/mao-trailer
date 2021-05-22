import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import NowCard from "../../Cards/NowCard";
const NowList = ({ now }) => {
  const { path } = useRouteMatch();
  const tv = useSelector((state) => state.tv.popularTvies);

  useEffect(() => {
    if (!now[0]) {
      return <h1>Loading....</h1>;
    } else if (!tv[0]) {
      return <h1>Loading....</h1>;
    }
  }, [now, popular]);

  return (
    <>
      <span>Now List</span>
      <div className="movies">
        {path.includes("movies") &&
          now.map((d, i) => {
            return (
              <div key={i} className="nowlist-card-area">
                <NowCard
                  id={d.movieId}
                  image={d.MovieImage}
                  name={d.MovieName}
                />
              </div>
            );
          })}

        {path.includes("tv") &&
          now.map((d, i) => {
            return (
              <div key={i} className="nowlist-card-area">
                <NowCard
                  id={d.movieId}
                  image={d.MovieImage}
                  name={d.MovieName}
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
    now: state.movie.now,
  };
};

export default connect(mapStateToProps)(React.memo(NowList));
