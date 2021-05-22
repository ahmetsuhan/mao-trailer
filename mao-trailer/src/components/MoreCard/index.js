import React from "react";
import { useHistory } from "react-router";
import "../../styles/MoreCard.style.scss";

const sections = ["top-section", "now", "popular"];

const handleRouting = (target, sections, history, backPath) => {
  let el = target;
  let con = true;
  let parentClass = "";
  while (con) {
    parentClass = isContain(sections, el.classList);
    if (parentClass) {
      con = false;
    }
    el = findParentElement(el);
  }
  if (backPath === "movies") {
    if (parentClass === "top-section") {
      history.push("/movies/movies-all");
    }
    if (parentClass === "now") {
      history.push("/movies/now-list");
    }
    if (parentClass === "popular") {
      history.push("/movies/popular-list");
    }
  } else if (backPath === "tv") {
    if (parentClass === "top-section") {
      history.push("/tv/tv-all");
    }
    if (parentClass === "now") {
      history.push("/tv/now-list");
    }
    if (parentClass === "popular") {
      history.push("/tv/popular-list");
    }
  }
};

const isContain = (sections = [], classList) => {
  if (sections === []) {
    return false;
  }
  for (let i = 0; i < sections.length; i++) {
    if (classList.contains(sections[i])) {
      return sections[i];
    }
  }
  return false;
};

const findParentElement = (target) => {
  return target.parentElement;
};

const MoreCard = ({ width, height, backPath = "movies" }) => {
  const history = useHistory();
  const cardBgStyles =
    width && height ? { width, height } : { display: "none" };

  const handleClick = (e) => {
    const { target } = e;

    handleRouting(target, sections, history, backPath);
  };

  return (
    <div onClick={(e) => handleClick(e)} className="morecard">
      <div
        className="morecard-bg"
        style={{
          ...cardBgStyles,
        }}
      ></div>
      <span>MORE</span>
    </div>
  );
};

export default React.memo(MoreCard);
