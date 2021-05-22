import React, { useEffect } from "react";
import "../../styles/NoMatch.style.scss";
const NoMatch = ({ history }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      history.push("/movies");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [history]);

  return (
    <div className="no-match">
      <h1> no match</h1>
      <p>Redirecting in 5 sec. to Movies Page...</p>
    </div>
  );
};

export default React.memo(NoMatch);
