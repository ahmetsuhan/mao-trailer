import { useState } from "react";

export const useInput = (initialState) => {
  const [state, setState] = useState(initialState);

  function reset() {
    setState("");
  }

  return [state, setState, reset];
};
