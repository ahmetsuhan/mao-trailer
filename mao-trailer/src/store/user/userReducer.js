import { UserActionTypes } from "./userTypes";

const initialState = {
  users: [],
  currentUser: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
