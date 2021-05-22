import React from "react";
import Proptypes from "prop-types";
import "../../styles/Button.style.scss";

const Button = ({ children, text, onClick, type = "button", filledColor }) => {
  return (
    <button
      className={filledColor && "linear-colored"}
      onClick={onClick}
      type={type}
    >
      {text ? <span>{text}</span> : ""}
      {children}
    </button>
  );
};

Button.prototype = {
  text: Proptypes.string,
  onClick: Proptypes.func,
  type: Proptypes.string,
};

export default React.memo(Button);
