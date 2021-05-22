import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";
import "../../styles/LauncherPage.style.scss";

const LauncherPage = () => {
  const history = useHistory();

  const [show, setShow] = useToggle(true);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setShow(false);
      let t = setTimeout(() => {
        history.push("/walkthrough");
        return clearTimeout(t);
      }, 1000);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [history, setShow]);

  return (
    <div className="launcher ">
      <div
        className={`container ${show ? "animated-fadein" : "animated-fadeout"}`}
      >
        <div className="circle circle-lg"></div>
        <div className="circle circle-md"></div>
        <div className="circle circle-sm"></div>
        <div className="logo-container">
          <svg
            width="102"
            height="107"
            viewBox="0 0 102 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.0312 40.3813H41.061C38.8289 40.3813 36.7339 39.3042 35.4339 37.4888L10.3569 2.46221C7.12315 -2.05466 0 0.234043 0 5.78994V105.074C0 106.137 0.861917 107 1.92562 107H14.9518C18.0688 107 20.5953 104.472 20.5953 101.354V77.7893C30.5392 77.7893 39.5605 83.6191 43.6489 92.6876L43.9103 93.2675C45.1873 96.0995 48.0045 97.9203 51.1103 97.9203H51.3293C54.1674 97.9203 56.7416 96.2565 57.9088 93.6685L58.3508 92.6876C62.4392 83.6191 71.4605 77.7893 81.4044 77.7893V101.354C81.4044 104.472 83.9309 107 87.0476 107H100.074C101.137 107 102 106.137 102 105.074V5.53752C102 0.0358019 94.6866 -2.18631 91.0846 2.70555L66.5824 37.5932C65.2761 39.3475 63.218 40.3813 61.0312 40.3813Z"
              fill="url(#paint0_linear)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M102 5.51734V105.075C102 106.137 101.136 107 100.068 107H87.1883C83.9978 107 81.411 104.418 81.411 101.233V77.8809H81.3564V77.7901C76.059 77.7901 71.0225 79.4365 66.8501 82.3451C64.5971 83.9129 62.5928 85.853 60.9372 88.0957C60.8856 88.1684 60.8341 88.238 60.7795 88.3106C59.8001 89.6363 58.9483 91.0618 58.2415 92.566C58.0201 93.0321 57.8112 93.507 57.6229 93.9916C56.4252 96.1314 54.2329 97.6447 51.6709 97.905H51.6615C51.5129 97.9141 51.3643 97.9201 51.2127 97.9201H50.9944C48.2135 97.9201 45.6634 96.4701 44.2416 94.1393C44.2404 94.1375 44.2394 94.1353 44.2385 94.1338C44.0017 93.5224 43.7412 92.9259 43.4592 92.3421C42.3131 89.9722 40.8091 87.8021 39.02 85.9105C39.014 85.9075 39.0112 85.9014 39.0079 85.8984C38.9715 85.8618 38.9382 85.8227 38.9018 85.7861C38.8866 85.7682 38.8684 85.7531 38.8532 85.7349C37.6343 84.4456 36.288 83.2925 34.8385 82.2906C32.346 80.6711 32.3958 77.0047 34.9395 75.4665C43.0602 70.557 50.8276 59.7181 50.8276 59.7181L64.5213 40.381L65.8252 38.5378C66.1678 38.1746 66.4589 37.766 66.6924 37.3211C66.6924 37.3211 66.6924 37.3211 66.6927 37.3211L67.4323 36.2709L81.411 16.5342L91.8328 1.81881C91.8328 1.81881 91.8328 1.81881 91.8331 1.81881C95.6141 -1.87065 101.985 0.39932 102 5.51734Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="30.7949"
                y1="76.6551"
                x2="60.5372"
                y2="62.7293"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#FFEDED" />
              </linearGradient>
            </defs>
          </svg>
          <p>MAO TRAILER</p>
        </div>

        <footer>
          <span>This application provided by Ahmet Suhan Oka</span>
          <span>Copyright © 2021</span>
        </footer>
      </div>
    </div>
  );
};

export default React.memo(LauncherPage);
