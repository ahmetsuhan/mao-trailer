import React from "react";
import { useHistory } from "react-router-dom";
const MoviePlayViewPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="movie-play-view-page">
      <div className="container">
        <h1 onClick={handleClick}>Back</h1>
        <video
          width="100%"
          height="300px"
          src="https://s1.videopark.me/ifr/fst/gov2a.php?id=13066&fz=NDNWD_pDwPZjFmZDYQZlZG1XkllmM9XCmplff08&d=NtOWiv0gx0FAexFclpGYoAAlFQgm6xFY10F&v=5&k=ce4e9e986b0fbc713624d54b83c36283"
          controls
        >
          <source
            src="https://s1.videopark.me/ifr/fst/gov2a.php?id=13066&fz=NDNWD_pDwPZjFmZDYQZlZG1XkllmM9XCmplff08&d=NtOWiv0gx0FAexFclpGYoAAlFQgm6xFY10F&v=5&k=ce4e9e986b0fbc713624d54b83c36283"
            type="video/mp4"
          />

          <source
            src="https://s1.videopark.me/ifr/fst/gov2a.php?id=13066&fz=NDNWD_pDwPZjFmZDYQZlZG1XkllmM9XCmplff08&d=NtOWiv0gx0FAexFclpGYoAAlFQgm6xFY10F&v=5&k=ce4e9e986b0fbc713624d54b83c36283"
            type="video/ogg"
          />
        </video>
      </div>
    </div>
  );
};

export default React.memo(MoviePlayViewPage);
