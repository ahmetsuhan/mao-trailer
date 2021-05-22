import React from "react";
import "../../styles/MovieCommentsPage.style.scss";
import urlRoutingHelper from "../../helpers/urlRoutingHelper";
import { useHistory } from "react-router-dom";
import MovieCard from "../../components/Movies/MovieCard";

const MovieCommentsPage = () => {
  const history = useHistory();

  const handleClickBackBtn = () => {
    urlRoutingHelper.handleBacksBtnRouting(history);
  };
  return (
    <div className="movie-comments-page">
      <header className="header">
        <svg
          onClick={handleClickBackBtn}
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
            fill="#999999"
          ></path>
          <rect opacity="0.01" width="30" height="30" fill="white"></rect>
        </svg>
        <span className="back-btn">Back</span>
      </header>

      <main className="comments-container">
        <div className="comments-container-top">
          <h1 className="comments-container-top-title">
            Reviews <span>(390)</span>
          </h1>
          <div className="small-movie-card-area">
            <MovieCard movieImage="https://resim.fullhdfilmizlesene.com/mdsresim_izle/fullhd-dead-olu.jpg" />
          </div>
        </div>
        <section className="comments-section">
          <div className="movie-comment">
            <div className="left">
              <div className="img-area">
                <img
                  src="https://resim.fullhdfilmizlesene.com/mdsresim_izle/fullhd-dead-olu.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <p className="username">Sarah Green</p>
              <p className="user-comment-text">
                The French Revolution constituted for the conscience of the
                dominant aristocratic class a fall from innocence, and upturning
                of the natural chain of events that resounded all over Europe
              </p>
            </div>
          </div>

          <div className="movie-comment">
            <div className="left">
              <div className="img-area">
                <img
                  src="https://resim.fullhdfilmizlesene.com/mdsresim_izle/fullhd-dead-olu.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <p className="username">Sarah Green</p>
              <p className="user-comment-text">
                The French Revolution constituted for the conscience of the
                dominant aristocratic class a fall from innocence, and upturning
                of the natural chain of events that resounded all over Europe
              </p>
            </div>
          </div>

          <div className="movie-comment">
            <div className="left">
              <div className="img-area">
                <img
                  src="https://resim.fullhdfilmizlesene.com/mdsresim_izle/fullhd-dead-olu.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <p className="username">Sarah Green</p>
              <p className="user-comment-text">
                The French Revolution constituted for the conscience of the
                dominant aristocratic class a fall from innocence, and upturning
                of the natural chain of events that resounded all over Europe
              </p>
            </div>
          </div>

          <div className="movie-comment">
            <div className="left">
              <div className="img-area">
                <img
                  src="https://resim.fullhdfilmizlesene.com/mdsresim_izle/fullhd-dead-olu.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <p className="username">Sarah Green</p>
              <p className="user-comment-text">
                The French Revolution constituted for the conscience of the
                dominant aristocratic class a fall from innocence, and upturning
                of the natural chain of events that resounded all over Europe
              </p>
            </div>
          </div>

          <div className="movie-comment">
            <div className="left">
              <div className="img-area">
                <img
                  src="https://resim.fullhdfilmizlesene.com/mdsresim_izle/fullhd-dead-olu.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <p className="username">Sarah Green</p>
              <p className="user-comment-text">
                The French Revolution constituted for the conscience of the
                dominant aristocratic class a fall from innocence, and upturning
                of the natural chain of events that resounded all over Europe
              </p>
            </div>
          </div>

          <div className="movie-comment">
            <div className="left">
              <div className="img-area">
                <img
                  src="https://resim.fullhdfilmizlesene.com/mdsresim_izle/fullhd-dead-olu.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <p className="username">Sarah Green</p>
              <p className="user-comment-text">
                The French Revolution constituted for the conscience of the
                dominant aristocratic class a fall from innocence, and upturning
                of the natural chain of events that resounded all over Europe
              </p>
            </div>
          </div>

          <div className="movie-comment">
            <div className="left">
              <div className="img-area">
                <img
                  src="https://resim.fullhdfilmizlesene.com/mdsresim_izle/fullhd-dead-olu.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <p className="username">Sarah Green</p>
              <p className="user-comment-text">
                The French Revolution constituted for the conscience of the
                dominant aristocratic class a fall from innocence, and upturning
                of the natural chain of The French Revolution constituted for
                the conscience of the dominant aristocratic class a fall from
                innocence, and upturning of the natural chain of The French
                Revolution constituted for the conscience of the dominant
                aristocratic class a fall from innocence, and upturning of the
                natural chain of The French Revolution constituted for the
                conscience of the dominant aristocratic class a fall from
                innocence, and upturning of the natural chain of The French
                Revolution constituted for the conscience of the dominant
                aristocratic class a fall from innocence, and upturning of the
                natural chain of events that resounded all over Europe
              </p>
            </div>
          </div>
        </section>

        <footer className="send-comment">
          <form>
            <div className="input-area">
              <div className="input-control">
                <input placeholder="Say something..." />
              </div>
              <span className="btn btn-red">Send</span>
            </div>
            <div className="line"></div>
          </form>
        </footer>
      </main>
    </div>
  );
};

export default React.memo(MovieCommentsPage);
