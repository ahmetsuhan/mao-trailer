import React from "react";
import "../../styles/Header.style.scss";
import Searchbar from "../Searchbar";
const Header = ({ title = "" }) => {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      <Searchbar placeholder="Search..." />
    </div>
  );
};

export default React.memo(Header);
