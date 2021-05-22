import React from "react";

const NowListMovieCard = () => {
  return (
    <div className="nowlist-card-area">
      <div className="movie-card">
        <div className="movie-card-img">
          <img
            src="https://images.unsplash.com/photo-1554233751-52c21d08af96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1001&q=80"
            alt=""
          />
        </div>
        <span>Justice League</span>
      </div>
    </div>
  );
};

export default React.memo(NowListMovieCard);
