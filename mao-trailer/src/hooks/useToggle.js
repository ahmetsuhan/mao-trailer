import { useState } from "react";
export const useToggle = (initialState) => {
  const [toggle, setToggle] = useState(initialState);

  function set(state) {
    setToggle(state);
  }

  return [toggle, set];
};
