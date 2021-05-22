import React, { useEffect } from "react";
import "../../styles/Page.style.scss";
import MoreCard from "../../components/MoreCard";

import { connect } from "react-redux";
import { moviesCount } from "../../store/movie/movieUtils";
import TopCard from "../../components/Cards/TopCard";
import NowCard from "../../components/Cards/NowCard";
import PopularCard from "../../components/Cards/PopularCard";

const MoviesPage = ({ now, popular }) => {
  useEffect(() => {
    if (!now || !popular) {
      return <h1>Loading....</h1>;
    }
  }, [now, popular]);

  return (
    <div className="home">
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
                      />
                    </div>
                  );
                })
              : null}

            <MoreCard width="232px" height="160px" />
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

            <MoreCard width="140px" height="210px" />
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

            <MoreCard width="140px" height="210px" />
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
            <MoreCard width="140px" height="210px" />
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    now: state.movie.now,
    popular: state.movie.popular,
  };
};
export default connect(mapStateToProps)(React.memo(MoviesPage));
