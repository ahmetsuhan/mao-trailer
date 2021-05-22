import React from "react";
import "../../styles/CountBox.style.scss";

const CountBox = (topText = "", bottomText = "", onClick = () => {}) => {
  return (
    <div onClick={onClick} className="count-box">
      <span className="top-text active">{topText}</span>
      <span className="bottom-text">{bottomText}</span>
    </div>
  );
};

export default React.memo(CountBox);
