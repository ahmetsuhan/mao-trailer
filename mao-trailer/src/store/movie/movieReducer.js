import { movieActionTypes } from "./movieTypes";
import { getSearchedMovies } from "./movieUtils";

const initialState = {
  movies: [],
  now: [],
  popular: [],
  searchedMovies: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case movieActionTypes.SET_ALL_MOVIE:
      return {
        ...state,
        movies: action.payload,
      };
    case movieActionTypes.SET_POPULAR_MOVIE:
      return {
        ...state,
        popular: action.payload,
      };

    case movieActionTypes.SET_NOW_MOVIE:
      return {
        ...state,
        now: action.payload,
      };
    case movieActionTypes.SET_SEARCHED_MOVIES:
      const searched = getSearchedMovies(action.payload, state.movies);
      return {
        ...state,
        searchedMovies: searched,
      };
    default:
      return state;
  }
};
