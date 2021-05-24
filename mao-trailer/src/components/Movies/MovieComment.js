import React from "react";
import { useSelector } from "react-redux";
import { findUserById } from "../../store/user/userUtils";

const MovieComment = ({ userId, commentId }) => {
  const users = useSelector((state) => state.user.users);

  const user = findUserById(userId, users);
  const comment = user[0].movieComments.filter((uc) => uc.id === commentId);

  return (
    <div className="movie-comment">
      <div className="left">
        <div className="img-area">
          <img src={user[0].picture.large} alt="" />
        </div>
      </div>
      <div className="right">
        <p className="username">
          {user[0].name.first + " " + user[0].name.last}
        </p>
        <p className="user-comment-text">{comment[0].commentMessage}</p>
      </div>
    </div>
  );
};

export default MovieComment;
