import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../../styles/Page.style.scss";

import MoreCard from "../../components/MoreCard";
import TopCard from "../../components/Cards/TopCard";
import NowCard from "../../components/Cards/NowCard";
import PopularCard from "../../components/Cards/PopularCard";

import { moviesCount } from "../../store/movie/movieUtils";
import { connect } from "react-redux";
import { setAllTv } from "../../store/tv/tvAction";
const TvPage = ({ setAllTv }) => {
  const tvies = useSelector((state) => state.movie.movies);
  const popular = useSelector((state) => state.tv.popularTvies);
  const now = useSelector((state) => state.tv.nowTvies);

  useEffect(() => {
    setAllTv(tvies);
  }, []);

  if (!popular) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="tv">
      <section className="top-section">
        <div className="top-section-container">
          <div className="scroll-row">
            {moviesCount(popular, 10)[0]
              ? moviesCount(popular, 10).map((d, i) => {
                  return (
                    <div key={i} className="card-area">
                      <TopCard
                        name={d.MovieName}
                        image={d.MovieImage}
                        id={d.movieId}
                        backurl="tv"
                      />
                    </div>
                  );
                })
              : null}

            <MoreCard backPath="tv" width="232px" height="160px" />
          </div>
        </div>
      </section>

      <section className="now">
        <span>Now</span>

        <div className="container">
          <div className="scroll-row">
            {moviesCount(now, 10)[0]
              ? moviesCount(now, 10).map((d, i) => {
                  return (
                    <div key={i} className="card-area">
                      <NowCard
                        id={d.movieId}
                        name={d.MovieName}
                        image={d.MovieImage}
                      />
                    </div>
                  );
                })
              : null}

            <MoreCard backPath="tv" width="140px" height="210px" />
          </div>
        </div>
      </section>

      <section className="popular">
        <span>Popular</span>

        <div className="container">
          <div className="scroll-row">
            {moviesCount(popular, 5)[0]
              ? moviesCount(popular, 5).map((d, i) => {
                  return (
                    <div key={i} className="aso">
                      <PopularCard
                        id={d.movieId}
                        image={d.MovieImage}
                        name={d.MovieName}
                        point={d.moviePoint}
                        year={d.MovieYear}
                      />
                    </div>
                  );
                })
              : null}

            <MoreCard backPath="tv" width="140px" height="210px" />
          </div>
        </div>
        <div className="container">
          <div className="scroll-row">
            {moviesCount(popular, 5)[0]
              ? moviesCount(popular, 5).map((d, i) => {
                  return (
                    <div key={i} className="aso">
                      <PopularCard
                        id={d.movieId}
                        image={d.MovieImage}
                        name={d.MovieName}
                        point={d.moviePoint}
                        year={d.MovieYear}
                      />
                    </div>
                  );
                })
              : null}
            <MoreCard backPath="tv" width="140px" height="210px" />
          </div>
        </div>
      </section>
    </div>
  );
};

const mapDispatchToProps = {
  setAllTv,
};

export default connect(null, mapDispatchToProps)(React.memo(TvPage));
