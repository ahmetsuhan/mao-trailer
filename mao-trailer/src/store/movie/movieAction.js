import { movieActionTypes } from "./movieTypes";
import {
  addExtraFeaturesToData,
  setDummyPointAndIdToCards,
  setNowAndPopularCards,
} from "../../helpers/commonFunctions";

const setAllMovie = (payload) => {
  return {
    type: movieActionTypes.SET_ALL_MOVIE,
    payload,
  };
};

const setPopularMovie = (movies = {}) => {
  const [popular] = setNowAndPopularCards(movies);

  return {
    type: movieActionTypes.SET_POPULAR_MOVIE,
    payload: popular,
  };
};
const setNowMovie = (movies = {}) => {
  const [, now] = setNowAndPopularCards(movies);

  return {
    type: movieActionTypes.SET_NOW_MOVIE,
    payload: now,
  };
};

export const fetchAllMovie = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3004/data");
    const data = await response.json();
    let newMoviesData = setDummyPointAndIdToCards(data.movieData);

    let datas = addExtraFeaturesToData(newMoviesData);
    dispatch(setAllMovie(datas));
    dispatch(setPopularMovie(datas));
    dispatch(setNowMovie(datas));
  };
};

export const setSearchedMovies = (movieName = "") => {
  return {
    type: movieActionTypes.SET_SEARCHED_MOVIES,
    payload: movieName,
  };
};
