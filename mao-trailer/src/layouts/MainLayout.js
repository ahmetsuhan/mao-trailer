import React from "react";
import "../styles/MainLayout.style.scss";
import { useRouteMatch } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  const { path } = useRouteMatch();

  const handlePageRender = (path) => {
    if (path.includes("movies")) {
      return {
        path: "movies",
        title: "MOVIES",
      };
    }

    if (path.includes("tv")) {
      return {
        path: "tv",
        title: "TV",
      };
    }
  };

  return (
    <div className="page">
      <div className="container">
        <Header title={handlePageRender(path).title} />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(MainLayout);
