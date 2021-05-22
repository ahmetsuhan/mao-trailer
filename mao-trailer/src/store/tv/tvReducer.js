import { tvActionTypes } from "./tvTypes";

const initialState = {
  tvies: [],
  popularTvies: [],
  nowTvies: [],
};

export const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case tvActionTypes.SET_ALL_TV:
      return {
        ...state,
        tvies: action.payload,
      };

    case tvActionTypes.SET_POPULAR_TV:
      return {
        ...state,
        popularTvies: action.payload,
      };
    case tvActionTypes.SET_NOW_TV:
      return {
        ...state,
        nowTvies: action.payload,
      };
    default:
      return state;
  }
};
