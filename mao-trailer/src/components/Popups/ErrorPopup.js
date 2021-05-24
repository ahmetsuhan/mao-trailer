import React from "react";
import "../../styles/ErrorPopup.style.scss";
import { Link } from "react-router-dom";
import Button from "../Button";

const ErrorPopup = ({ show = false, onShow, message = "" }) => {
  const handleClosePopup = () => {
    onShow({ show: false, message: "" });
  };

  return (
    <div className={`error-popup ${show ? "animated-show" : "animated-hide"}`}>
      <h3 className="title">
        Warning<span onClick={handleClosePopup}>X</span>
      </h3>
      <div className="info-text">
        <p>{message}</p>
      </div>
      <div className="btn-area">
        <Button filledColor>
          <Link to="/profile/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default React.memo(ErrorPopup);
