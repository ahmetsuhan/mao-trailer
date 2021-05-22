import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";
import "../../styles/Searchbar.style.scss";

const Searchbar = ({ type, placeholder }) => {
  const [toggle, setToggle] = useToggle(false);
  const [input, setInput, reset] = useInput("");
  const inputRef = useRef(null);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search/value=${input}`);
  };

  const handleClick = (e) => {
    setToggle((prev) => (prev = !prev));
    if (inputRef.current.classList.contains("grow")) {
      if (inputRef.current.value !== "") {
        handleSubmit(e);
      }
    }
    reset();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="searchbar">
      <input
        ref={inputRef}
        required
        onChange={(e) => setInput(e.target.value)}
        className={`${toggle ? "grow" : "shrink"}`}
        type={type}
        placeholder={placeholder}
        value={input}
      />
      <i onClick={(e) => handleClick(e)} className="fas fa-search"></i>
    </form>
  );
};

export default React.memo(Searchbar);
