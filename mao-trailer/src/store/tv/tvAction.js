import { tvActionTypes } from "./tvTypes";
import {
  addExtraFeaturesToData,
  setDummyPointAndIdToCards,
  setNowAndPopularCards,
} from "../../helpers/commonFunctions";

export const setTv = (payload) => {
  return {
    type: tvActionTypes.SET_ALL_TV,
    payload,
  };
};

export const setAllTv = (payload) => {
  let newData = setDummyPointAndIdToCards(payload, "tv");
  let datas = addExtraFeaturesToData(newData);

  return (dispatch) => {
    dispatch(setTv(datas));
    dispatch(setPopularTv(datas));
    dispatch(setNowTv(datas));
  };
};

export const setPopularTv = (payload) => {
  const [popular] = setNowAndPopularCards(payload);

  return {
    type: tvActionTypes.SET_POPULAR_TV,
    payload: popular,
  };
};

export const setNowTv = (payload) => {
  const [, now] = setNowAndPopularCards(payload);

  return {
    type: tvActionTypes.SET_NOW_TV,
    payload: now,
  };
};
