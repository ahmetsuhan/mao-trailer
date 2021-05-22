import React from "react";
import { useToggle } from "../../../hooks/useToggle";
import { useHistory } from "react-router-dom";
import "../../../styles/MovieDetailFooter.style.scss";

const MovieDetailFooter = ({ movieId }) => {
  const [isLiked, setIsliked] = useToggle(false);
  const [isFavorite, setIsFavorite] = useToggle(false);

  const history = useHistory();
  const handleClickLikeBtn = (e) => {
    setIsliked((prev) => (prev = !prev));
  };

  const handleClickFavoriteBtn = (e) => {
    setIsFavorite((prev) => (prev = !prev));
  };

  const handleClickCommentBtn = () => {
    history.push(`/movies/${movieId}/comments`);
  };

  return (
    <footer className="movie-detail-footer">
      <div className="btn-area">
        <svg
          onClick={(e) => handleClickLikeBtn(e)}
          width="54"
          height="82"
          viewBox="0 0 54 82"
          fill={`${isLiked ? "red" : "none"}`} //red
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <g filter="url(#filter0_d)">
              <circle cx="27" cy="27" r="27" fill="white" />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M37.9842 35.5773C37.872 35.8626 37.597 36.0497 37.2903 36.0497H34.3574C32.8367 37.7646 31.1664 39.0486 29.3932 39.8684C29.3128 39.9046 29.2286 39.9268 29.1407 39.9352C28.5963 39.9778 28.198 40 27.9249 40C27.1749 40 26.3088 39.8712 25.3474 39.6147L24.7414 39.9204C24.6366 39.9731 24.5225 40 24.4047 40H23.5349C20.5215 40 19.8894 38.5381 19.8894 37.3125C19.8894 37.2754 19.8894 37.2374 19.8931 37.1939C18.3238 36.966 17.4971 36.0739 17.4971 34.5981C17.4971 34.4924 17.5027 34.3627 17.5158 34.2062C16.9789 34.0163 16.5562 33.7347 16.257 33.3687C15.9016 32.9463 15.7202 32.4007 15.7202 31.7502C15.7202 31.288 15.8586 30.8062 16.1354 30.3116C15.3704 29.4222 15 28.4606 15 27.3785C15 26.0306 15.7294 24.9365 17.1716 24.1277C18.5633 23.356 20.4057 22.9669 22.6521 22.9669H22.8279C22.6315 21.7977 23.4863 21.8922 22.9196 20.7861L22.5698 20.1811C21.7449 18.6127 21.3522 17.4427 21.3522 16.5774C21.3522 14.1816 22.6297 12.6679 25.1492 12.0787L25.3868 12.0212C25.5813 11.974 25.7871 12.0064 25.9573 12.1102C26.1256 12.2149 26.2473 12.3835 26.2903 12.578L27.3096 17.0675L31.4097 21.4133C31.6978 21.7459 30.8897 21.0566 31.6847 22.11L32.3113 22.9335C33.1305 24.0388 33.5009 24.4131 33.6692 24.5353C33.8919 24.6974 34.2846 24.7808 34.8157 24.7808H37.1895C37.4832 24.7808 37.7506 24.9532 37.8684 25.2209C38.6184 26.8987 39 28.6412 39 30.4024C38.9999 32.1107 38.6594 33.8514 37.9842 35.5773Z"
              stroke="#979797"
              strokeWidth="2"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="-10"
              y="-2"
              width="74"
              height="74"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <clipPath id="clip0">
              <rect width="54" height="82" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          onClick={(e) => handleClickFavoriteBtn(e)}
          width="68"
          height="82"
          viewBox="0 0 68 82"
          fill={`${isFavorite ? "red" : "none"}`} //red
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <g filter="url(#filter0_d)">
              <circle cx="34" cy="27" r="27" fill="white" />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.762 36.972C34.6587 36.3921 33.3407 36.3921 32.2375 36.972L30.7746 37.7411C27.9962 39.2017 24.7489 36.8423 25.2796 33.7485L25.5588 32.1204C25.7696 30.8918 25.3622 29.6382 24.4695 28.7681L23.2868 27.6153C21.0388 25.4242 22.2792 21.6066 25.3857 21.1552L27.0207 20.9177C28.2542 20.7384 29.3206 19.9637 29.8722 18.846L30.6036 17.3641C31.9929 14.5494 36.0066 14.5494 37.3959 17.3641L38.1273 18.846C38.6789 19.9637 39.7453 20.7384 40.9788 20.9177L42.6138 21.1552C45.7203 21.6066 46.9606 25.4242 44.7127 27.6153L43.5299 28.7681C42.6373 29.6382 42.2299 30.8918 42.4407 32.1204L42.7199 33.7485C43.2506 36.8423 40.0033 39.2017 37.2249 37.7411L35.762 36.972Z"
              stroke="#979797"
              strokeWidth="2"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="-3"
              y="-2"
              width="74"
              height="74"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <clipPath id="clip0">
              <rect width="68" height="82" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          onClick={handleClickCommentBtn}
          width="74"
          height="82"
          viewBox="0 0 74 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <g filter="url(#filter0_d)">
              <circle cx="37" cy="27" r="27" fill="white" />
            </g>
            <path
              d="M29 36.2823H30V35.7798L29.5968 35.4799L29 36.2823ZM31.6544 40.5684L32.1291 41.4486L31.6544 40.5684ZM35.146 38.6853L35.2521 37.691L34.944 37.6581L34.6713 37.8052L35.146 38.6853ZM48 26.3786C48 32.6536 42.8605 37.7571 36.5 37.7571V39.7571C43.9466 39.7571 50 33.7765 50 26.3786H48ZM36.5 15C42.8605 15 48 20.1035 48 26.3786H50C50 18.9806 43.9466 13 36.5 13V15ZM25 26.3786C25 20.1035 30.1395 15 36.5 15V13C29.0534 13 23 18.9806 23 26.3786H25ZM29.5968 35.4799C26.8015 33.4007 25 30.0965 25 26.3786H23C23 30.7602 25.1263 34.6472 28.4032 37.0847L29.5968 35.4799ZM28 36.2823V38.9841H30V36.2823H28ZM28 38.9841C28 41.1036 30.2636 42.4547 32.1291 41.4486L31.1797 39.6883C30.6467 39.9757 30 39.5897 30 38.9841H28ZM32.1291 41.4486L35.6207 39.5655L34.6713 37.8052L31.1797 39.6883L32.1291 41.4486ZM36.5 37.7571C36.078 37.7571 35.6617 37.7347 35.2521 37.691L35.0399 39.6797C35.5199 39.7309 36.007 39.7571 36.5 39.7571V37.7571Z"
              fill="#979797"
            />
            <circle cx="30.5" cy="26.5" r="1.5" fill="#999999" />
            <circle cx="36.5" cy="26.5" r="1.5" fill="#999999" />
            <circle cx="42.5" cy="26.5" r="1.5" fill="#999999" />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="-2"
              width="74"
              height="74"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <clipPath id="clip0">
              <rect width="74" height="82" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default React.memo(MovieDetailFooter);
