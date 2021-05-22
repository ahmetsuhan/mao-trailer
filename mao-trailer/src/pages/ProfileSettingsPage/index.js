import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/ProfileSettingsPage.style.scss";
import urlRoutingHelper from "../../helpers/urlRoutingHelper";

import { connect } from "react-redux";
import { setCurrentUser } from "../../store/user/userAction";

const ProfileSettingsPage = ({ logout }) => {
  const history = useHistory();

  const handleClickBackBtn = () => {
    urlRoutingHelper.handleBacksBtnRouting(history);
  };

  const handleSignoutBtn = () => {
    logout({});
    setTimeout(() => {
      history.push("/movies");
    }, 1000);
  };

  return (
    <div className="profile-settings-page">
      <header>
        <nav>
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
              fill="#222222"
            />
            <rect opacity="0.01" width="30" height="30" fill="white" />
          </svg>
          <span>Back</span>
        </nav>
      </header>
      <main>
        <section className="title">
          <h1>Setting</h1>
        </section>
        <section className="clear-cache">
          <div className="left">
            <span>Clear cache</span>
          </div>
          <div className="right">
            <span>263.65MB</span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.1019 16.7982C22.4925 16.4077 22.4925 15.7745 22.1019 15.384L12.9957 6.2778C12.6133 5.89534 11.996 5.8863 11.6025 6.25738L11.3298 6.51458C10.9218 6.89934 10.9099 7.54435 11.3035 7.94388L19.329 16.0911L11.2968 24.2001C10.9055 24.5952 10.9117 25.2337 11.3105 25.6211L11.6021 25.9044C11.9942 26.2853 12.6194 26.2807 13.006 25.8942L22.1019 16.7982Z"
                fill="#D8D8D8"
              />
              <rect opacity="0.01" width="32" height="32" fill="white" />
            </svg>
          </div>
        </section>

        <section className="share-app">
          <div className="left">
            <span>Clear cache</span>
          </div>
          <div className="right">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.1019 16.7982C22.4925 16.4077 22.4925 15.7745 22.1019 15.384L12.9957 6.2778C12.6133 5.89534 11.996 5.8863 11.6025 6.25738L11.3298 6.51458C10.9218 6.89934 10.9099 7.54435 11.3035 7.94388L19.329 16.0911L11.2968 24.2001C10.9055 24.5952 10.9117 25.2337 11.3105 25.6211L11.6021 25.9044C11.9942 26.2853 12.6194 26.2807 13.006 25.8942L22.1019 16.7982Z"
                fill="#D8D8D8"
              />
              <rect opacity="0.01" width="32" height="32" fill="white" />
            </svg>
          </div>
        </section>

        <section className="question">
          <div className="left">
            <span>Question</span>
          </div>
          <div className="right">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.1019 16.7982C22.4925 16.4077 22.4925 15.7745 22.1019 15.384L12.9957 6.2778C12.6133 5.89534 11.996 5.8863 11.6025 6.25738L11.3298 6.51458C10.9218 6.89934 10.9099 7.54435 11.3035 7.94388L19.329 16.0911L11.2968 24.2001C10.9055 24.5952 10.9117 25.2337 11.3105 25.6211L11.6021 25.9044C11.9942 26.2853 12.6194 26.2807 13.006 25.8942L22.1019 16.7982Z"
                fill="#D8D8D8"
              />
              <rect opacity="0.01" width="32" height="32" fill="white" />
            </svg>
          </div>
        </section>

        <section className="about">
          <div className="left">
            <span>About</span>
          </div>
          <div className="right">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.1019 16.7982C22.4925 16.4077 22.4925 15.7745 22.1019 15.384L12.9957 6.2778C12.6133 5.89534 11.996 5.8863 11.6025 6.25738L11.3298 6.51458C10.9218 6.89934 10.9099 7.54435 11.3035 7.94388L19.329 16.0911L11.2968 24.2001C10.9055 24.5952 10.9117 25.2337 11.3105 25.6211L11.6021 25.9044C11.9942 26.2853 12.6194 26.2807 13.006 25.8942L22.1019 16.7982Z"
                fill="#D8D8D8"
              />
              <rect opacity="0.01" width="32" height="32" fill="white" />
            </svg>
          </div>
        </section>
      </main>

      <div className="btn-area">
        <div onClick={() => handleSignoutBtn()} className="btn btn-block">
          Sign Out
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  logout: setCurrentUser,
};
export default connect(
  null,
  mapDispatchToProps
)(React.memo(ProfileSettingsPage));
