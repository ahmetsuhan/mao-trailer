import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import MovieCard from "../../components/Movies/MovieCard";
import "../../styles/ProfilePage.style.scss";

import { useSelector } from "react-redux";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState({
    like: true,
    watching: false,
    comments: false,
  });

  const history = useHistory();

  const loggedUser = useSelector((state) => state.user.currentUser);
  const userId = loggedUser.id.value ?? "";

  const handleClickTabs = (e) => {
    const { target } = e;
    const targetParent = target.parentElement;
    const targetParentClass = targetParent.classList;

    if (
      targetParentClass.contains("boxes") ||
      targetParentClass.contains("count-box")
    ) {
      setAllTabsFalse();
      if (targetParentClass.contains("comments")) {
        setActiveTab({ comments: true });
      }

      if (targetParentClass.contains("like")) {
        setActiveTab({ like: true });
      }

      if (targetParentClass.contains("watching")) {
        setActiveTab({ watching: true });
      }
    }
  };

  const setAllTabsFalse = () => {
    setActiveTab({ like: false, watching: false, comment: false });
  };

  const retunUserFullname = (user) => {
    let userVal = user ?? {};
    const { name } = userVal;
    return name.first + " " + name.last;
  };

  const handleClickSettingsBtn = () => {
    history.push(`/profile/${userId}/settings`);
  };

  const handleCommentsCount = () => {
    return loggedUser.movieComments.length ?? 0;
  };
  const handleLikedMoviesCount = () => {
    return loggedUser.likedMovies.length ?? 0;
  };
  const handleWatchingMoviesCount = () => {
    return loggedUser.watchingMovies.length ?? 0;
  };

  const handleActiveTabRender = ({ like, watching, comments }) => {
    if (like) {
      return loggedUser.likedMovies.map((movie, index) => {
        return (
          <div key={index} className="img-area">
            <MovieCard movieImage={movie.MovieImage} />
          </div>
        );
      });
    }
    if (watching) {
      return loggedUser.watchingMovies.map((movie, index) => {
        return (
          <div key={index} className="img-area">
            <MovieCard movieImage={movie.MovieImage} />
          </div>
        );
      });
    }
    if (comments) {
      console.log("comments");
    }
  };
  return (
    <div className="profile-page">
      <header>
        <nav>
          <span>Profile</span>
          <svg
            onClick={handleClickSettingsBtn}
            className="settings-btn"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6407 14.02L22.0353 13.2241L21.5752 13.5741L21.6489 14.1475L22.6407 14.02ZM24.8099 12.37L25.4153 13.1659L25.419 13.1631L24.8099 12.37ZM24.9333 11.73L25.8055 11.2409L25.7993 11.2299L25.7929 11.2191L24.9333 11.73ZM22.8772 8.27L22.0049 8.75911L22.0111 8.77006L22.0175 8.78086L22.8772 8.27ZM22.25 8.05L21.9166 7.10724L21.9013 7.11265L21.8862 7.11855L22.25 8.05ZM19.6902 9.05L19.0911 9.85068L19.5362 10.1837L20.0541 9.98145L19.6902 9.05ZM17.9528 8.07L16.9635 8.21584L17.0475 8.78563L17.5825 8.99891L17.9528 8.07ZM17.5621 5.42L16.5703 5.54746L16.5715 5.55666L16.5728 5.56584L17.5621 5.42ZM12.4424 5.42L13.4317 5.56584L13.4331 5.55666L13.4343 5.54746L12.4424 5.42ZM12.0518 8.07L12.4221 8.99891L12.9571 8.78563L13.0411 8.21584L12.0518 8.07ZM10.3143 9.05L9.95048 9.98145L10.461 10.1809L10.9037 9.85787L10.3143 9.05ZM7.7545 8.05L8.11838 7.11851L8.11022 7.11541L7.7545 8.05ZM7.12738 8.27L7.98705 8.78086L7.99346 8.77006L7.99961 8.75911L7.12738 8.27ZM5.07128 11.73L5.92597 12.2492L5.93094 12.2409L5.07128 11.73ZM5.19464 12.37L4.58557 13.1631L4.58923 13.1659L5.19464 12.37ZM7.36384 14.02L8.35568 14.1475L8.42936 13.5741L7.96925 13.2241L7.36384 14.02ZM7.36384 15.98L7.96925 16.7759L8.42936 16.4259L8.35568 15.8525L7.36384 15.98ZM5.19464 17.63L4.58922 16.8341L4.58558 16.8369L5.19464 17.63ZM5.07128 18.27L4.19905 18.7591L4.20519 18.7701L4.21161 18.7809L5.07128 18.27ZM7.12738 21.73L7.99961 21.2409L7.99346 21.2299L7.98705 21.2191L7.12738 21.73ZM7.7545 21.95L8.08796 22.8928L8.10326 22.8874L8.11836 22.8815L7.7545 21.95ZM10.3143 20.95L10.9134 20.1493L10.4683 19.8163L9.95048 20.0185L10.3143 20.95ZM12.0518 21.93L13.0411 21.7842L12.9571 21.2144L12.4221 21.0011L12.0518 21.93ZM12.4424 24.58L13.4343 24.4525L13.4331 24.4433L13.4317 24.4342L12.4424 24.58ZM17.5621 24.58L16.5728 24.4342L16.5715 24.4433L16.5703 24.4525L17.5621 24.58ZM17.9528 21.93L17.5825 21.0011L17.0475 21.2144L16.9635 21.7842L17.9528 21.93ZM19.6902 20.95L20.0541 20.0185L19.5436 19.8191L19.1008 20.1421L19.6902 20.95ZM22.25 21.95L21.8862 22.8815L21.8943 22.8846L22.25 21.95ZM22.8772 21.73L22.0175 21.2191L22.0111 21.2299L22.0049 21.2409L22.8772 21.73ZM24.9333 18.27L25.7929 18.7809L25.7993 18.7701L25.8055 18.7591L24.9333 18.27ZM24.8099 17.63L25.419 16.8369L25.4153 16.8341L24.8099 17.63ZM23.6326 16.1075C23.6762 15.7674 23.7127 15.4003 23.7127 15H21.7127C21.7127 15.2797 21.6874 15.5526 21.6489 15.8525L23.6326 16.1075ZM23.7127 15C23.7127 14.5997 23.6762 14.2326 23.6326 13.8925L21.6489 14.1475C21.6874 14.4474 21.7127 14.7203 21.7127 15H23.7127ZM23.2461 14.8159L25.4153 13.1659L24.2045 11.5741L22.0353 13.2241L23.2461 14.8159ZM25.419 13.1631C26.026 12.6969 26.1609 11.8747 25.8055 11.2409L24.061 12.2191C23.9524 12.0253 23.9844 11.7431 24.2008 11.5769L25.419 13.1631ZM25.7929 11.2191L23.7368 7.75914L22.0175 8.78086L24.0736 12.2409L25.7929 11.2191ZM23.7494 7.78089C23.355 7.07758 22.5348 6.88858 21.9166 7.10724L22.5835 8.99276C22.4811 9.02899 22.3788 9.02699 22.2874 8.99667C22.1911 8.96474 22.0786 8.89045 22.0049 8.75911L23.7494 7.78089ZM21.8862 7.11855L19.3263 8.11855L20.0541 9.98145L22.6139 8.98145L21.8862 7.11855ZM20.2893 8.24932C19.6893 7.80036 19.0372 7.42578 18.3231 7.14109L17.5825 8.99891C18.1226 9.21422 18.6219 9.49964 19.0911 9.85068L20.2893 8.24932ZM18.9421 7.92416L18.5514 5.27416L16.5728 5.56584L16.9635 8.21584L18.9421 7.92416ZM18.554 5.29254C18.4531 4.50765 17.7706 4 17.0584 4V6C16.8602 6 16.6095 5.85235 16.5703 5.54746L18.554 5.29254ZM17.0584 4H12.9462V6H17.0584V4ZM12.9462 4C12.2339 4 11.5514 4.50765 11.4506 5.29254L13.4343 5.54746C13.3951 5.85235 13.1444 6 12.9462 6V4ZM11.4531 5.27416L11.0624 7.92416L13.0411 8.21584L13.4317 5.56584L11.4531 5.27416ZM11.6814 7.14109C10.9603 7.42858 10.3115 7.81426 9.72498 8.24213L10.9037 9.85787C11.3864 9.50574 11.889 9.21142 12.4221 8.99891L11.6814 7.14109ZM10.6782 8.11855L8.11836 7.11855L7.39063 8.98145L9.95048 9.98145L10.6782 8.11855ZM8.11022 7.11541C7.43447 6.8582 6.63319 7.10675 6.25516 7.78089L7.99961 8.75911C7.86831 8.99325 7.60162 9.0618 7.39877 8.98459L8.11022 7.11541ZM6.26772 7.75914L4.21161 11.2191L5.93094 12.2409L7.98705 8.78086L6.26772 7.75914ZM4.21662 11.2108C3.8037 11.8905 4.00797 12.7196 4.58558 13.1631L5.80371 11.5769C5.99066 11.7204 6.07156 12.0095 5.92593 12.2492L4.21662 11.2108ZM4.58923 13.1659L6.75842 14.8159L7.96925 13.2241L5.80006 11.5741L4.58923 13.1659ZM6.37199 13.8925C6.32817 14.2336 6.29187 14.6103 6.29187 15H8.29187C8.29187 14.7297 8.31726 14.4464 8.35568 14.1475L6.37199 13.8925ZM6.29187 15C6.29187 15.3897 6.32817 15.7664 6.37199 16.1075L8.35568 15.8525C8.31726 15.5536 8.29187 15.2703 8.29187 15H6.29187ZM6.75842 15.1841L4.58923 16.8341L5.80006 18.4259L7.96925 16.7759L6.75842 15.1841ZM4.58558 16.8369C3.97852 17.3031 3.84366 18.1253 4.19905 18.7591L5.9435 17.7809C6.05216 17.9747 6.02011 18.2569 5.80371 18.4231L4.58558 16.8369ZM4.21161 18.7809L6.26772 22.2409L7.98705 21.2191L5.93094 17.7591L4.21161 18.7809ZM6.25516 22.2191C6.64954 22.9224 7.46977 23.1114 8.08796 22.8928L7.42103 21.0072C7.52346 20.971 7.62572 20.973 7.71714 21.0033C7.81345 21.0353 7.92596 21.1096 7.99961 21.2409L6.25516 22.2191ZM8.11836 22.8815L10.6782 21.8815L9.95048 20.0185L7.39063 21.0186L8.11836 22.8815ZM9.71525 21.7507C10.3153 22.1996 10.9673 22.5742 11.6814 22.8589L12.4221 21.0011C11.882 20.7858 11.3826 20.5004 10.9134 20.1493L9.71525 21.7507ZM11.0624 22.0758L11.4531 24.7258L13.4317 24.4342L13.0411 21.7842L11.0624 22.0758ZM11.4506 24.7075C11.5514 25.4923 12.2339 26 12.9462 26V24C13.1444 24 13.3951 24.1477 13.4343 24.4525L11.4506 24.7075ZM12.9462 26H17.0584V24H12.9462V26ZM17.0584 26C17.7706 26 18.4531 25.4923 18.554 24.7075L16.5703 24.4525C16.6095 24.1477 16.8602 24 17.0584 24V26ZM18.5514 24.7258L18.9421 22.0758L16.9635 21.7842L16.5728 24.4342L18.5514 24.7258ZM18.3231 22.8589C19.0442 22.5714 19.6931 22.1857 20.2796 21.7579L19.1008 20.1421C18.6182 20.4943 18.1156 20.7886 17.5825 21.0011L18.3231 22.8589ZM19.3263 21.8815L21.8862 22.8815L22.6139 21.0186L20.0541 20.0185L19.3263 21.8815ZM21.8943 22.8846C22.5701 23.1418 23.3714 22.8932 23.7494 22.2191L22.0049 21.2409C22.1362 21.0068 22.4029 20.9382 22.6058 21.0154L21.8943 22.8846ZM23.7368 22.2409L25.7929 18.7809L24.0736 17.7591L22.0175 21.2191L23.7368 22.2409ZM25.8055 18.7591C26.1609 18.1253 26.026 17.3031 25.419 16.8369L24.2008 18.4231C23.9844 18.2569 23.9524 17.9747 24.061 17.7809L25.8055 18.7591ZM25.4153 16.8341L23.2461 15.1841L22.0353 16.7759L24.2045 18.4259L25.4153 16.8341ZM15.0023 17.5C13.5442 17.5 12.4041 16.3518 12.4041 15H10.4041C10.4041 17.5082 12.4921 19.5 15.0023 19.5V17.5ZM12.4041 15C12.4041 13.6482 13.5442 12.5 15.0023 12.5V10.5C12.4921 10.5 10.4041 12.4918 10.4041 15H12.4041ZM15.0023 12.5C16.4604 12.5 17.6005 13.6482 17.6005 15H19.6005C19.6005 12.4918 17.5124 10.5 15.0023 10.5V12.5ZM17.6005 15C17.6005 16.3518 16.4604 17.5 15.0023 17.5V19.5C17.5124 19.5 19.6005 17.5082 19.6005 15H17.6005Z"
              fill="#222222"
            />
            <rect opacity="0.01" width="30" height="30" fill="white" />
          </svg>
        </nav>

        <div className="profile-info-area">
          <img src={loggedUser.picture.large} alt="" />
          <p className="username">{retunUserFullname(loggedUser)}</p>
        </div>
      </header>

      <main>
        <section onClick={(e) => handleClickTabs(e)} className="boxes">
          <div className="count-box like">
            <span className={`top-text ${activeTab.like && "active"}`}>
              {handleLikedMoviesCount()}
            </span>
            <span className="bottom-text">Like</span>
          </div>

          <div className="count-box watching">
            <span className={`top-text ${activeTab.watching && "active"}`}>
              {handleWatchingMoviesCount()}
            </span>
            <span className="bottom-text">Watching</span>
          </div>

          <div className="count-box comments">
            <span className={`top-text ${activeTab.comments && "active"}`}>
              {handleCommentsCount()}
            </span>
            <span className="bottom-text">Comments</span>
          </div>
        </section>

        <section className="content">
          <div className="container">
            {/* <div className="img-area">
              <MovieCard movieImage="https://randomuser.me/api/portraits/women/46.jpg" />
            </div> */}
            {handleActiveTabRender(activeTab)}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default React.memo(ProfilePage);
